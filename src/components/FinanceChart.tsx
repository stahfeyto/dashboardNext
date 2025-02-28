"use client";

import dynamic from "next/dynamic";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

// Distribuição das vendas garantindo as regras
const data = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  Mercedes: [14000, 13000, 11800, 15000, 13600, 12800, 13400, 11000, 12600, 13800, 13000, 14040],
  BMW: [9800, 10200, 9500, 9200, 9900, 10300, 9800, 15500, 10700, 10100, 10800, 10600],
  Audi: [6000, 6200, 5800, 6400, 6100, 6200, 6500, 6900, 6200, 6400, 6800, 7220], 
  Porsche: [3200, 3600, 3300, 13000, 3500, 3700, 3900, 4200, 3800, 4000, 4400, 4420], 
};

// Configuração do gráfico
const options = {
  tooltip: { trigger: "axis", backgroundColor: "rgba(0,0,0,0.8)", textStyle: { color: "#fff" } },
  legend: {
    data: ["Mercedes", "BMW", "Audi", "Porsche"],
    top: 10,
    left: "center",
    textStyle: { color: "#000", fontSize: 14 },
  },
  xAxis: {
    type: "category",
    data: data.months,
    axisLabel: { color: "#000" },
    axisLine: { lineStyle: { color: "#888" } },
  },
  yAxis: {
    type: "value",
    axisLabel: { color: "#000" },
    splitLine: { lineStyle: { color: "rgba(0,0,0,0.2)" } },
  },
  series: [
    {
      name: "Mercedes",
      type: "line",
      data: data.Mercedes,
      itemStyle: { color: "#C0C0C0" },
      areaStyle: {},
    },
    {
      name: "BMW",
      type: "line",
      data: data.BMW,
      itemStyle: { color: "#0066B1" },
      areaStyle: {},
    },
    {
      name: "Audi",
      type: "line",
      data: data.Audi,
      itemStyle: { color: "#FF4500" },
      areaStyle: {},
    },
    {
      name: "Porsche",
      type: "line",
      data: data.Porsche,
      itemStyle: { color: "#FFD700" },
      areaStyle: {},
    },
  ],
};

const AreaStackChart = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-black mb-4">Monthly Sales</h1>
      <ReactECharts option={options} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default AreaStackChart;
