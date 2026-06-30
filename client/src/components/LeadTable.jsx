export default function LeadTable({
  leads,
  onEdit,
  onDelete,
}) {
  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 mt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No Leads Found
        </h2>

        <p className="text-gray-500 mt-2">
          Click "Add Lead" to create your first lead.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl mt-6 overflow-hidden">

      <div className="flex justify-between items-center px-6 py-5 border-b">

        <h2 className="text-2xl font-bold">
          Lead Management
        </h2>

        <span className="text-gray-500">
          {leads.length} Leads
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>

              <th className="py-4 px-6 text-left">
                Name
              </th>

              <th className="text-left">
                Email
              </th>

              <th className="text-left">
                Source
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead.id}
                className="border-b hover:bg-slate-50 transition"
              >

                <td className="py-5 px-6 font-semibold">
                  {lead.name}
                </td>

                <td>
                  {lead.email}
                </td>

                <td>
                  {lead.source}
                </td>

                <td>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                      lead.status === "New"
                        ? "bg-green-500"
                        : lead.status === "Contacted"
                        ? "bg-yellow-500"
                        : lead.status === "Qualified"
                        ? "bg-blue-500"
                        : lead.status === "Converted"
                        ? "bg-purple-500"
                        : "bg-red-500"
                    }`}
                  >
                    {lead.status}
                  </span>

                </td>

                <td className="text-center">

                  <button
                    onClick={() => onEdit(lead)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-3 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(lead.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}