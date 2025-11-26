import { type Tap, createAtomValueTap, BaseTap, Grip, type TapFactory, withOneOf } from '@owebeeone/grip-react';
import { grok } from './runtime';
import { CURRENT_TIME, COUNT, CURRENT_TAB, COUNT_TAP, CURRENT_TAB_TAP, WEATHER_PROVIDER_NAME, WEATHER_PROVIDER_NAME_TAP, SLIDE_INDEX, SLIDE_INDEX_TAP } from './grips';
import { WEATHER_TEMP_C, WEATHER_HUMIDITY, WEATHER_WIND_SPEED, WEATHER_WIND_DIR, WEATHER_RAIN_PCT, WEATHER_SUNNY_PCT, WEATHER_UV_INDEX, WEATHER_LOCATION } from './grips.weather';
import { createLocationToGeoTap, METEO_TAP_FACTORY } from './openmeteo_taps';
import { CalculatorTap } from './taps_calculator';

// Calculator tap factory
class CalcTapFactory implements TapFactory {
  readonly kind: 'TapFactory' = 'TapFactory';
  readonly provides = CalculatorTap.outputs;
  readonly key: TapFactory = this;

  build() {
    return new CalculatorTap();
  }
}
export const CalcTap = new CalcTapFactory();

// Time tick: publish current time every second
class TimeTap extends BaseTap implements Tap {
  private timer: any | null = null;
  constructor() { super({ provides: [CURRENT_TIME] }); }
  private start() {
    console.log('TimeTap.start');
    if (this.timer) return;
    const tick = () => {
      console.log('TimeTap.tick');
      const updates = new Map([[CURRENT_TIME as any, new Date()]]);
      this.publish(updates);
    };
    tick();
    this.timer = setInterval(tick, 1000);
  }
  private stop() {
    console.log('TimeTap.stop');
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }
  onAttach(home: any): void {
    console.log('TimeTap.onAttach');
    super.onAttach(home);
  }
  onDetach(): void {
    console.log('TimeTap.onDetach');
    this.stop();
    super.onDetach();
  }
  onConnect(dest: any, grip: any): void {
    console.log('TimeTap.onConnect');
    super.onConnect(dest, grip);
    this.start();
  }
  onDisconnect(dest: any, grip: any): void {
    console.log('TimeTap.onDisconnect');
    super.onDisconnect(dest, grip);
    const hasAny = (this.producer?.getDestinations().size ?? 0) > 0;
    if (!hasAny) this.stop();
  }
  produce(): void {}
  produceOnParams(): void {}
  produceOnDestParams(): void {}
}
export const TickTap: Tap = new TimeTap() as unknown as Tap;

// --- Simple Atom Taps ---
export const CounterTap: Tap = createAtomValueTap(
  COUNT, 
  { initial: COUNT.defaultValue ?? 0, handleGrip: COUNT_TAP }) as unknown as Tap;

export const TabTap: Tap = createAtomValueTap(
    CURRENT_TAB, 
    { initial: 'presentation', handleGrip: CURRENT_TAB_TAP });

export const WeatherProviderTap: Tap = createAtomValueTap(
  WEATHER_PROVIDER_NAME, 
  { initial: WEATHER_PROVIDER_NAME.defaultValue ?? 'meteo', handleGrip: WEATHER_PROVIDER_NAME_TAP });

export const PresentationSlideTap: Tap = createAtomValueTap(
  SLIDE_INDEX,
  { initial: 0, handleGrip: SLIDE_INDEX_TAP }
);

// --- Weather Implementation ---
class WeatherTapImpl extends BaseTap implements Tap {
  private timer: any | null = null;
  constructor() {
    super({ provides: [
      WEATHER_TEMP_C,
      WEATHER_HUMIDITY,
      WEATHER_WIND_SPEED,
      WEATHER_WIND_DIR,
      WEATHER_RAIN_PCT,
      WEATHER_SUNNY_PCT,
      WEATHER_UV_INDEX,
    ], destinationParamGrips: [WEATHER_LOCATION] });
  }
  onAttach(home: any): void {
    super.onAttach(home);
    const tick = () => {
      const now = Date.now();
      const destNodes = Array.from(this.producer?.getDestinations().keys() ?? []);
      const groups = new Map<string, any[]>();
      for (const destNode of destNodes) {
        const dest = destNode.get_context();
        if (!dest) continue;
        const loc = this.getDestParamValue(dest, WEATHER_LOCATION) ?? (WEATHER_LOCATION.defaultValue ?? 'Default');
        const key = String(loc);
        let arr = groups.get(key);
        if (!arr) { arr = []; groups.set(key, arr); }
        arr.push(dest);
      }

      const computeFor = (loc: string) => {
        const lower = loc.toLowerCase();
        let offset = 0;
        for (let i = 0; i < lower.length; i++) offset = (offset + lower.charCodeAt(i)) % 10;
        const t = (Math.floor(now / 2000) + offset) % 10;
        const temp = 20 + offset + t;
        const humidity = 50 + ((t + offset) % 20);
        const wind = 10 + ((t + offset) % 5);
        const dir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][(t + offset) % 8];
        const rain = ((t * 7 + offset * 3) % 100);
        const sunny = 100 - rain;
        const uv = (t + offset) % 11;
        return new Map<Grip<any>, any>([
          [WEATHER_TEMP_C as any, temp],
          [WEATHER_HUMIDITY as any, humidity],
          [WEATHER_WIND_SPEED as any, wind],
          [WEATHER_WIND_DIR as any, dir],
          [WEATHER_RAIN_PCT as any, rain],
          [WEATHER_SUNNY_PCT as any, sunny],
          [WEATHER_UV_INDEX as any, uv],
        ]);
      };

      for (const [loc, dests] of groups) {
        const updates = computeFor(loc);
        for (const dest of dests) this.publish(updates, dest);
      }
    };
    tick();
    this.timer = setInterval(tick, 2000);
  }
  onDetach(): void {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
    super.onDetach();
  }
  produce(): void {}
  produceOnParams(): void { this.produce(); }
  produceOnDestParams(): void {}
}
export const WeatherTap: Tap = new WeatherTapImpl() as unknown as Tap;

// Registration helper
export function registerAllTaps() {
  grok.registerTap(TickTap);
  grok.registerTap(CounterTap);
  grok.registerTap(TabTap);
  grok.registerTap(CalcTap);
  grok.registerTap(WeatherProviderTap);
  grok.registerTap(PresentationSlideTap);
  
  grok.registerTap(createLocationToGeoTap());

  const mockQuery = withOneOf(WEATHER_PROVIDER_NAME, 'mock', 10).build();
  grok.addBinding({ id: 'mock-weather-binding', query: mockQuery, tap: WeatherTap, baseScore: 5 });

  const meteoQuery = withOneOf(WEATHER_PROVIDER_NAME, 'meteo', 10).build();
  grok.addBinding({ id: 'meteo-weather-binding', query: meteoQuery, tap: METEO_TAP_FACTORY, baseScore: 5 });
}
