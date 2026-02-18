import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#16a34a", "#ef4444"];

const DonutChart = ({ stats, setSelectedStatus }) => {
  const data = [
    { name: "Active", value: stats.active },
    { name: "Inactive", value: stats.inactive },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={100}
          onClick={(entry) => setSelectedStatus(entry.name)}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default DonutChart;
