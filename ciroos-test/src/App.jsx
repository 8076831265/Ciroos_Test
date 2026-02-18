import { useMemo, useState, useEffect } from "react";
import { fetchUsers } from "./services/tableData";
import { usePersistedState } from "./hooks/usePersistedState";
import { filterUsers, getStats } from "./utils/filterUtils";
import SearchBar from "./components/SearchFilter";
import StatsCards from "./components/Cards";
import DonutChart from "./components/DonutChart";
import DataTable from "./components/DataTable";

function App() {
  const [search, setSearch] = usePersistedState("search", "");
  const [selectedStatus, setSelectedStatus] = usePersistedState("status", null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load users");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = useMemo(
    () => filterUsers(users, search, selectedStatus),
    [users, search, selectedStatus],
  );

  const stats = useMemo(() => getStats(users), [users]);

  const handleReset = () => {
    setSearch("");
    setSelectedStatus(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-700">Loading ...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-semibold">Error loading data</p>
          <p>{error}</p>
          <p className="mt-2 text-sm">Make sure json-server is running on port 3001</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          User Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* LEFT: Donut Chart */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center min-h-[420px] w-full max-w-full">
            <h2 className="text-lg font-semibold text-gray-700 mb-6">User Status Distribution</h2>
            <div className="flex items-center justify-center h-[240px]">
              <DonutChart stats={stats} setSelectedStatus={setSelectedStatus} />
            </div>
            {/* Legend */}
            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                <span className="text-gray-600 text-sm">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="text-gray-600 text-sm">Inactive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 max-w-full">
          <div className="flex flex-col gap-3 w-full max-w-full">
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center w-full max-w-full">
              <div className="flex-1 w-full min-w-0">
                <SearchBar
                  search={search}
                  setSearch={setSearch}
                  onReset={handleReset}
                />
              </div>

            </div>
          </div>

          <div className="w-full max-w-full">
            <StatsCards stats={stats} />
          </div>

          <div className="w-full">
            <DataTable data={filteredUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
