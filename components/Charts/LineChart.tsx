import React, { useEffect, useState } from "react";
import { ForecastHourProps } from "@/interfaces/forecast";
import Chart from "react-apexcharts";

interface ChartComponentProps {
  data: ForecastHourProps[];
}

const Linechart: React.FC<ChartComponentProps> = ({ data }) => {
  const [tag, setTag] = useState<string[]>([]);
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
      setTag(info);
      setTemperature(temp);
      setHumidity(hum);
    }
  };

  const options = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: tag,
    },
  };

  const series = [
    {
      name: "Temperature",
      data: temperature,
    },
    {
      name: "Humidity",
      data: humidity,
    },
  ];

  return (
    <div className="line w-full">
      <Chart options={options} series={series} type="line" height={230} />
    </div>
  );
};

export default Linechart;
