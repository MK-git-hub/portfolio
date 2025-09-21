"use client";

import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Charts() {
  const pieData = {
    labels: ["React", "Angular", "Next.js", "D3.js"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#60a5fa", "#f59e0b", "#10b981", "#ef4444"],
      },
    ],
  };

  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Projects",
        data: [3, 5, 4, 6],
        backgroundColor: "#6366f1",
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    plugins: { legend: { position: "bottom" as const } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-lg border border-black/10 dark:border-white/15 p-4 bg-white dark:bg-black/20">
        <h3 className="text-sm font-semibold mb-2">Tech Usage Split</h3>
        <Pie data={pieData} options={commonOptions} />
      </div>
      <div className="rounded-lg border border-black/10 dark:border-white/15 p-4 bg-white dark:bg-black/20">
        <h3 className="text-sm font-semibold mb-2">Quarterly Projects</h3>
        <Bar data={barData} options={commonOptions} />
      </div>
    </div>
  );
}


