// import { Skeleton } from "antd";

import DashboardCard from "@/components/ui/DashboardCard";

const dashboardCardData = [
  { title: "Total Admin", data: 3 },
  { title: "Total Members", data: 12345 },
  { title: "Total Committees", data: 23 },
];
const DashboardPage = () => {
  return (
    <div className="w-full  lg:p-5 md:p-2 p-0">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-8 md:gap-6 gap-5 mb-10">
        {
          // dashboardCardDataPending ? (
          //   <Skeleton active />
          // ) : (
          dashboardCardData &&
            dashboardCardData.map((item, index) => (
              <DashboardCard key={index} title={item.title} data={item.data} />
            ))
          // )
        }
      </div>
    </div>
  );
};

export default DashboardPage;
