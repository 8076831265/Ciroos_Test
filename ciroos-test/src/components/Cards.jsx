const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div className="bg-white shadow rounded-xl p-4 text-center">
        <h3 className="text-gray-500">Active Users</h3>
        <p className="text-3xl font-bold text-green-600">
          {stats.active}
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-4 text-center">
        <h3 className="text-gray-500">Inactive Users</h3>
        <p className="text-3xl font-bold text-red-500">
          {stats.inactive}
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-4 text-center">
        <h3 className="text-gray-500">Total Users</h3>
        <p className="text-3xl font-bold">
          {stats.total}
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
