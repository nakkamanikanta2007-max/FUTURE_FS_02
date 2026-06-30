export default function SearchBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  onAddLead,
}) {
  return (
    <div className="flex justify-between items-center mt-8 mb-6 flex-wrap gap-4">

      {/* Search + Filter */}
      <div className="flex gap-4">

        <input
          type="text"
          placeholder="🔍 Search Leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-80 shadow"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-4 py-3 shadow"
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Converted">Converted</option>
          <option value="Lost">Lost</option>
        </select>

      </div>

      {/* Add Lead Button */}
      <button
        onClick={onAddLead}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition"
      >
        + Add Lead
      </button>

    </div>
  );
}