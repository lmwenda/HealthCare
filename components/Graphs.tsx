import { NextComponentType } from "next";
import { Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

export const LineGraph: NextComponentType = () => {
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Users",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Blogs",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

    return(
        <div className="w-50 sm:h-50 md:w-1/2 space-y-12 p-10 rounded md:border border-gray-400">
            <Line
                className="sm:w-48 sm:h-44 md:w-9/12" 
                data={data}
                width={200}
                height={100}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}
