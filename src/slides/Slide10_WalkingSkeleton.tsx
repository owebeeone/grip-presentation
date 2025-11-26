import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Slide10() {
    const data: ChartData<'line', number[], string> = {
        labels: ['Prototype', 'MVP', 'Scale', 'Enterprise'],
        datasets: [
            {
                label: 'Traditional (Refactor Pain)',
                data: [10, 50, 55, 90],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                stepped: 'before' as const,
                borderWidth: 3,
            },
            {
                label: 'GRIP (Smooth Scaling)',
                data: [10, 12, 15, 18],
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                tension: 0.4,
                borderWidth: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#fff' } },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                borderColor: '#334155',
                borderWidth: 1
            }
        },
        scales: {
            y: {
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' },
                title: { display: true, text: 'Complexity / Pain', color: '#fff' }
            },
            x: {
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            }
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">The "Walking Skeleton"</h2>
            <p className="text-center text-xl text-slate-400 mb-12">Zero-Refactor Scaling</p>
            
            <div className="w-full h-[400px] bg-slate-900/50 p-6 rounded-xl border border-slate-700 shadow-xl">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}
