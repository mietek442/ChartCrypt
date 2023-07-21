import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData, options }) {
  // console.log(options);
  return <Line data={chartData} options={options} />;
}

export default BarChart;
