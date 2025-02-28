"use client";

import ReactECharts from "echarts-for-react";

const SalesChart = () => {
  const chartData = [
    { name: "BMW", value: 2450, color: "#0066B1" },
    { name: "Mercedes", value: 3180, color: "#C0C0C0" },
  ];

  const options = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} vendas ({d}%)",
    },
    legend: {
      orient: "horizontal",
      bottom: 10,
      textStyle: {
        color: "#333",
        fontSize: 12,
      },
    },
    series: [
      {
        type: "pie",
        radius: ["45%", "75%"],
        center: ["50%", "45%"],
        data: chartData.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color },
        })),
        label: {
          color: "#333",
          fontSize: 14,
          formatter: "{b}: {c}",
        },
        labelLine: {
          length: 15,
          length2: 10,
          lineStyle: {
            color: "#666",
          },
        },
      },
    ],
  };

  return (
    <div className="w-full h-[450px] bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-6 flex flex-col justify-center items-center">
      <h1 className="text-lg font-semibold text-gray-700 mb-4">
      Sales Comparisonssss
      </h1>
      <ReactECharts option={options} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default SalesChart;
