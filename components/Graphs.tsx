import { NextComponentType } from "next";
import { Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

export const LineGraph: NextComponentType<any> = ({ cases, recovered, deaths, covid }: any) => {
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
    const data = {
        labels: ["Cases", "Recovered", "Deaths", "CasesPerMil"],
        datasets: [
          {
            label: "Covid",
            data: [cases, recovered, deaths, covid.casesPerOneMillion],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },         
        ]
      };

    return(
        <div className="w-50 sm:h-50 md:w-1/2 space-y-12 p-10 rounded md:border border-gray-400">
            <Line
                className="sm:w-48 sm:h-44 md:w-9/12" 
                data={data}
                width={1000}
                height={800}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}
