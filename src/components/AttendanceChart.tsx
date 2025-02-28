"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Importa ECharts de forma dinâmica para evitar erros no Next.js
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

// Dados das vendas semanais
const data = {
  days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  Mercedes: [320, 400, 170, 390, 420, 500, 530],
  BMW: [290, 350, 330, 370, 400, 460, 480],
  Audi: [180, 220, 210, 250, 270, 320, 340],
};

// Configuração do gráfico
const options = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Mercedes", "BMW", "Audi"],
    bottom: 0,
    textStyle: { fontSize: 14, color: "#333" },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: data.days,
    axisLabel: { color: "#000" }, // Eixo X com texto preto
    axisLine: { lineStyle: { color: "#888" } },
  },
  yAxis: {
    type: "value",
    axisLabel: { color: "#000" }, // Eixo Y com texto preto
    splitLine: { lineStyle: { color: "rgba(0,0,0,0.2)" } },
  },
  series: [
    {
      name: "Mercedes",
      type: "bar",
      data: data.Mercedes,
      itemStyle: { color: "#C0C0C0", borderRadius: [10, 10, 0, 0] }, 
      barWidth: "20%",
    },
    {
      name: "BMW",
      type: "bar",
      data: data.BMW,
      itemStyle: { color: "#0071C5", borderRadius: [10, 10, 0, 0] },
      barWidth: "20%",
    },
    {
      name: "Audi",
      type: "bar",
      data: data.Audi,
      itemStyle: { color: "#FF4500", borderRadius: [10, 10, 0, 0] },
      barWidth: "20%",
    },
  ],
};

const AttendanceChart = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-700">
        Weekly Sales by Brand
        </h1>

      </div>

      {/* Gráfico */}
      <div className="w-full h-[400px]">
        <ReactECharts option={options} style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
};

export default AttendanceChart;
