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

function PieChartComponent() {
  const data = {
    labels: [
      "Food",
      "Travel",
      "Shopping",
      "Others",
    ],
    datasets: [
      {
        data: [3000, 2500, 4000, 2500],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChartComponent;