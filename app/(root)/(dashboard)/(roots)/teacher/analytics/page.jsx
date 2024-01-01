import { Chart } from "@/components/dashboard/analytics/chart";
import { DataCard } from "@/components/dashboard/analytics/data-card";
const AnalyticsPage = () => {
  return (
    <div className="p-6">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <DataCard label="Total Revenue" value={0} shouldFormat />
        <DataCard label="Total Sales" value={0} />
      </div>
      <Chart data={[]} />
    </div>
  );
};

export default AnalyticsPage;
