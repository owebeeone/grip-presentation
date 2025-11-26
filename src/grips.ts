import type { AtomTapHandle } from '@owebeeone/grip-react';
import { defineGrip } from './runtime';

// --- Global/App State ---
export const CURRENT_TIME = defineGrip<Date>('CurrentTime', new Date());
export const PAGE_SIZE = defineGrip<number>('PageSize', 25);
export const DESCRIPTION = defineGrip<string>('Description', '');

// --- Counter Demo ---
export const COUNT = defineGrip<number>('Count', 1);
export const COUNT_TAP = defineGrip<AtomTapHandle<number>>('Count.Tap');

// --- Calculator Demo ---
export const CALC_DISPLAY = defineGrip<string>('CalcDisplay', '0');
export const CALC_DIGIT_PRESSED = defineGrip<(d: number) => void>('Calc.DigitPressed');
export const CALC_ADD_PRESSED = defineGrip<() => void>('Calc.AddPressed');
export const CALC_SUB_PRESSED = defineGrip<() => void>('Calc.SubPressed');
export const CALC_MUL_PRESSED = defineGrip<() => void>('Calc.MulPressed');
export const CALC_DIV_PRESSED = defineGrip<() => void>('Calc.DivPressed');
export const CALC_EQUALS_PRESSED = defineGrip<() => void>('Calc.EqualsPressed');
export const CALC_CLEAR_PRESSED = defineGrip<() => void>('Calc.ClearPressed');

// --- Navigation & Tabs ---
export type AppTab = 'presentation' | 'clock' | 'calc' | 'weather';
export const CURRENT_TAB = defineGrip<AppTab>('CurrentTab', 'presentation');
export const CURRENT_TAB_TAP = defineGrip<AtomTapHandle<AppTab>>('CurrentTab.Tap');

// --- Weather Demo Configuration ---
export const WEATHER_PROVIDER_NAME = defineGrip<'meteo' | 'mock'>('WeatherProvider', 'meteo');
export const WEATHER_PROVIDER_NAME_TAP = defineGrip<AtomTapHandle<'meteo' | 'mock'>>('WeatherProvider.Tap');

// --- Presentation Slides State ---
export const SLIDE_INDEX = defineGrip<number>('Presentation.SlideIndex', 0);
export const SLIDE_INDEX_TAP = defineGrip<AtomTapHandle<number>>('Presentation.SlideIndex.Tap');
export const TOTAL_SLIDES = defineGrip<number>('Presentation.TotalSlides', 15);
