
"use client";
import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/BrandCard";
import dynamic from "next/dynamic";
import SalesChart from "@/components/SalesCharts";

<div className="flex gap-4 flex-col lg:flex-row">
  <SalesChart />
  <div className="w-full lg:w-2/3 h-[450px]">
    <AttendanceChart />
  </div>
</div>

// Importa ECharts dinamicamente para evitar erros no Next.js
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

const AdminPage = () => {
  // Dados do gráfico de comparação BMW vs Mercedes
  const chartData = [
    { name: "BMW", value: 2450, color: "#0066B1" },
    { name: "Mercedes", value: 3180, color: "#C0C0C0" },
  ];

  // Configuração do gráfico
  const options = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} vendas ({d}%)",
    },
    legend: {
      bottom: 0,
      left: "center",
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "75%"],
        data: chartData.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color },
        })),
        label: {
          show: true,
          position: "outside",
        },
      },
    ],
  };

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS - SOMENTE 4 CARDS DAS MARCAS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Mercedes" value={3180} />
          <UserCard type="Bmw" value={2450} />
          <UserCard type="Audi" value={1540} />
          <UserCard type="Porsche" value={890} />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART - Gráfico BMW vs Mercedes */}
          <div className="w-full lg:w-1/3 h-[450px] bg-white rounded-xl p-4">
            <h1 className="text-lg font-semibold text-center">Comparação de Vendas</h1>
            <ReactECharts option={options} style={{ height: "250px", width: "100%" }} />
          </div>

          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">

        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
