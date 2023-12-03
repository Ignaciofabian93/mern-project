import React from "react";
import Chart from "react-apexcharts";

interface DonutchartProps {
  labels: string[];
  series: number[];
}

const Donutchart: React.FC<DonutchartProps> = ({ labels, series }) => {
  const state = {
    options: {
      labels: labels,
    },
    series: series,
  };
  return (
    <div className="donut">
      <Chart options={state.options} series={state.series} type="donut" width={400} height={230} />
    </div>
  );
};

export default Donutchart;
