interface DashboardCardProps {
  title: string;
  data: number;
}

const DashboardCard = ({ title, data }: DashboardCardProps) => {
  return (
    <div className="lg:p-4 md:p-3 p-2  bg-white shadow-lg rounded-md flex flex-col items-center justify-center border border-gray-300">
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <h2 className="text-3xl font-bold text-blue-500">{data}</h2>
    </div>
  );
};

export default DashboardCard;
