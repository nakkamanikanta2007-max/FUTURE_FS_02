import { useState, useEffect } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

export default function LeadForm({
  lead,
  fetchLeads,
  closeModal,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    status: "New",
    notes: "",
    followUp: "",
  });

  useEffect(() => {
    if (lead) {
      setFormData({
        name: lead.name || "",
        email: lead.email || "",
        source: lead.source || "",
        status: lead.status || "New",
        notes: lead.notes || "",
        followUp: lead.followUp || "",
      });
    }
  }, [lead]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (lead) {
        await API.put(`/leads/${lead.id}`, formData);
      } else {
        await API.post("/leads", formData);
      }

      await fetchLeads();

toast.success(
  lead
    ? "Lead Updated Successfully!"
    : "Lead Added Successfully!"
);

closeModal();
    } catch (err) {
      console.error(err);
      alert("Failed to save lead");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Source"
        name="source"
        value={formData.source}
        onChange={handleChange}
        required
      />

      <select
        className="w-full border p-3 rounded-lg"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>New</option>
        <option>Contacted</option>
        <option>Qualified</option>
        <option>Converted</option>
        <option>Lost</option>
      </select>

      <input
        type="date"
        className="w-full border p-3 rounded-lg"
        name="followUp"
        value={formData.followUp}
        onChange={handleChange}
      />

      <textarea
        className="w-full border p-3 rounded-lg"
        placeholder="Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600"
      >
        {lead ? "Update Lead" : "Add Lead"}
      </button>

    </form>
  );
}