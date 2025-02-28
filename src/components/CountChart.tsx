"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Importa ECharts de forma dinâmica para evitar erros no Next.js
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

const CountChart = () => {
  // Dados do gráfico (total de vendas)
  const chartData = [
    { name: "BMW", value: 2450, color: ["#0071C5", "#005B99"], logo: "/bmw.png" },
    { name: "Mercedes", value: 3180, color: ["#C0C0C0", "#A6A6A6"], logo: "/mercedes.png" },
  ];

  // Configuração do gráfico
  const options = {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.8)",
      textStyle: { color: "#fff" },
      borderColor: "#fff",
      formatter: "<b>{b}</b>: {c} vendas ({d}%)",
    },
    legend: {
      bottom: 0,
      left: "center",
      textStyle: { color: "#333", fontSize: 14 },
    },
    series: [
      {
        type: "pie",
        radius: ["45%", "90%"], // Aumentado para um gráfico maior
        center: ["50%", "50%"], // Mantém centralizado
        roseType: "radius", // Efeito para destacar diferenças
        data: chartData.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                { offset: 0, color: item.color[0] },
                { offset: 1, color: item.color[1] },
              ],
            },
            shadowBlur: 15,
            shadowColor: "rgba(0,0,0,0.3)",
          },
        })),
        label: {
          show: true,
          position: "outside",
          formatter: "{b}: {c}",
          textStyle: { fontSize: 16, fontWeight: "bold", color: "#333" },
        },
        labelLine: {
          length: 20,
          length2: 15,
          lineStyle: { color: "#666" },
        },
      },
    ],
  };

  return (
    <div className="w-full h-[600px] bg-white/30 backdrop-blur-md shadow-xl rounded-xl p-6 flex flex-col justify-center items-center border border-white/40">
      {/* TÍTULO */}
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Sales Comparison
      </h1>

      {/* GRÁFICO */}
      <div className="w-full h-[90%] relative flex items-center justify-center">
        <ReactECharts option={options} style={{ height: "100%", width: "100%" }} />

        {/* ÍCONES NO GRÁFICO */}
        <div className="absolute top-[42%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/bmw.png" alt="BMW" width={70} height={70} />
        </div>
        <div className="absolute top-[42%] right-[22%] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/mercedes.png" alt="Mercedes" width={70} height={70} />
        </div>
      </div>

      {/* INFORMAÇÕES ABAIXO DO GRÁFICO */}
      <div className="flex justify-center gap-10 mt-4">
        {chartData.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center">
            <Image src={brand.logo} alt={brand.name} width={50} height={50} />
            <h1 className="font-bold text-gray-800 text-lg">{brand.value.toLocaleString()}</h1>
            <h2 className="text-sm text-gray-500">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
