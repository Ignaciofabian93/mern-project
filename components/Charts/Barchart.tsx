import React from "react";
import Chart from "react-apexcharts";

interface BarchartProps {
  labels: string[];
  info: { x: string; y: number }[];
}

const Barchart: React.FC<BarchartProps> = ({ info, labels }) => {
  const state = {
    options: {
      labels: labels,
    },
    series: [{ data: info }],
  };
  return (
    <div className="bar">
      <Chart type="bar" options={state.options} series={state.series} width={400} height={230} />
    </div>
  );
};

export default Barchart;
