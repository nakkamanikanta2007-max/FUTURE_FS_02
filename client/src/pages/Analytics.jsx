import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Analytics() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await API.get("/leads");
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Analytics Dashboard
          </h1>

          <Charts leads={leads} />

        </div>

      </div>

    </div>
  );
}