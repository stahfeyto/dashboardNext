import Image from "next/image";

const brandColors: Record<CarBrand, string> = {
  Mercedes: "#C0c0c0", 
  Bmw: "#0066B1",     
  Audi: "#B20421",   
  Porsche: "#FFC72C",  

};

// Define um tipo específico para evitar erros de TypeScript
type CarBrand = "Mercedes" | "Bmw" | "Audi" | "Porsche";

interface UserCardProps {
  type: CarBrand;
  value: number;
}

const BrandCard = ({ type, value }: UserCardProps) => {
  return (
    <div className="rounded-2xl p-4 text-white flex flex-col items-center w-full"
         style={{ backgroundColor: brandColors[type], maxWidth: "250px" }}>
      <div className="flex justify-between items-center w-full">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>

      </div>
      <h1 className="text-2xl font-semibold my-4">{value.toLocaleString()}</h1>
      <h2 className="capitalize text-sm font-medium text-white">{type}</h2>
    </div>
  );
};

export default BrandCard;
