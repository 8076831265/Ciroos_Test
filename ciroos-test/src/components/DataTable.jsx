import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-md p-0">
      <table className="w-full text-left rounded-2xl overflow-hidden">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="p-4 font-semibold">ID</th>
            <th className="p-4 font-semibold">Name</th>
            <th className="p-4 font-semibold">Status</th>
            <th className="p-4 font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-8 text-gray-400">No users found.</td>
            </tr>
          ) : (
            currentRows.map((user, idx) => (
              <tr
                key={user.id}
                className={
                  `transition ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`
                }
              >
                <td className="p-4 align-middle text-gray-700">{user.id}</td>
                <td className="p-4 align-middle text-gray-700">{user.name}</td>
                <td className="p-4 align-middle">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-600 border border-red-200"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 align-middle text-gray-700">{user.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 border-t bg-gray-50 rounded-b-2xl">
        <div className="text-gray-500 text-sm">
          Rows per page: <span className="font-semibold">{rowsPerPage}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`w-8 h-8 flex items-center text-black justify-center rounded-md border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-blue-50 text-blue-600 border-blue-200'}`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            aria-label="Previous page"
          >
            <MdChevronLeft className="h-5 w-5 text-black" />
          </button>
          <span className="text-gray-700 text-sm font-semibold">
            {indexOfFirst + 1}-{Math.min(indexOfLast, data.length)} of {data.length}
          </span>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-md border ${currentPage === totalPages || totalPages === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-blue-50 text-blue-600 border-blue-200'}`}
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((p) => p + 1)}
            aria-label="Next page"
          >
            <MdChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
