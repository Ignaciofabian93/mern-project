import React, { useEffect, useState } from "react";
import { ForecastHourProps } from "@/interfaces/forecast";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  data: ForecastHourProps[];
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Forecast",
    },
  },
};

const Linechart: React.FC<ChartComponentProps> = ({ data }) => {
  const [labels, setLabels] = useState<string[]>([]);
  const [temperature, setTemperature] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);

  useEffect(() => {
    getChartdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getChartdata = () => {
    if (data) {
      const info = data.map((item) => item.time.slice(10));
      const temp = data.map((item) => item.temp_c);
      const hum = data.map((item) => item.humidity);
      setLabels(info);
      setTemperature(temp);
      setHumidity(hum);
    }
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temperature,
        borderColor: "#424874",
        backgroundColor: "#424874",
      },
      {
        label: "Humidity",
        data: humidity,
        borderColor: "#a6b1e1",
        backgroundColor: "#a6b1e1",
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "240px" }}>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default Linechart;
