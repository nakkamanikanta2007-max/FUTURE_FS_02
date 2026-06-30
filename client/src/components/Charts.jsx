import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function Charts({ leads }) {
  const newCount = leads.filter(
    (l) => l.status === "New"
  ).length;

  const contacted = leads.filter(
    (l) => l.status === "Contacted"
  ).length;

  const qualified = leads.filter(
    (l) => l.status === "Qualified"
  ).length;

  const converted = leads.filter(
    (l) => l.status === "Converted"
  ).length;

  const lost = leads.filter(
    (l) => l.status === "Lost"
  ).length;

  const data = {
    labels: [
      "New",
      "Contacted",
      "Qualified",
      "Converted",
      "Lost",
    ],
    datasets: [
      {
        data: [
          newCount,
          contacted,
          qualified,
          converted,
          lost,
        ],
        backgroundColor: [
          "#22c55e",
          "#f59e0b",
          "#3b82f6",
          "#8b5cf6",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Lead Status Distribution
      </h2>

      <div className="w-80 mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
}