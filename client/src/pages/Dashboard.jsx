import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import LeadTable from "../components/LeadTable";
import LeadForm from "../components/LeadForm";
import FollowUpPanel from "../components/FollowUpPanel";
import Charts from "../components/Charts";
import DeleteModal from "../components/DeleteModal";
import RecentActivity from "../components/RecentActivity";
import { exportCSV } from "../utils/exportCSV";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  // Fetch Leads
  const fetchLeads = async () => {
    try {
      const res = await API.get("/leads");
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Edit Lead
  const handleEdit = (lead) => {
    setEditingLead(lead);
    setShowModal(true);
  };

  // Open Delete Modal
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  // Confirm Delete
  const confirmDelete = async () => {
    try {
      await API.delete(`/leads/${deleteId}`);

      toast.success("Lead Deleted Successfully!");

      fetchLeads();

      setShowDeleteModal(false);
      setDeleteId(null);

    } catch (err) {
      console.error(err);
    }
  };

  // Search + Filter
  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.source.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      lead.status === statusFilter;

    return matchesSearch && matchesStatus;

  });

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 ml-64 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <section id="dashboard">
  <StatsCards leads={leads} />
</section>

          <SearchBar
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            onAddLead={() => {
              setEditingLead(null);
              setShowModal(true);
            }}
          />
          <div className="flex justify-end mb-5">

<button
onClick={() => exportCSV(filteredLeads)}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg"
>

📄 Export CSV

</button>

</div>

          <section id="leads">

  <LeadTable
    leads={filteredLeads}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</section>

          <section id="followups">

  <FollowUpPanel leads={leads} />

</section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

  <section id="analytics">

  <Charts leads={leads} />

</section>

  <RecentActivity leads={leads} />

</div>

        </div>

      </div>

      {/* Add/Edit Lead Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-bold">
                {editingLead ? "Edit Lead" : "Add New Lead"}
              </h2>

              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingLead(null);
                }}
                className="text-red-500 text-2xl"
              >
                ✕
              </button>

            </div>

            <LeadForm
              lead={editingLead}
              fetchLeads={fetchLeads}
              closeModal={() => {
                setShowModal(false);
                setEditingLead(null);
              }}
            />

          </div>

        </div>
      )}

      {/* Delete Modal */}

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeleteId(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>
  );
}