import { useState } from "react";
import {
  FaChartPie,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menu = [
    {
      title: "Dashboard",
      id: "dashboard",
      icon: <FaChartPie />,
    },
    {
      title: "Leads",
      id: "leads",
      icon: <FaUsers />,
    },
    {
      title: "Analytics",
      id: "analytics",
      icon: <FaChartLine />,
    },
    {
      title: "Follow Ups",
      id: "followups",
      icon: <FaCalendarAlt />,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white flex flex-col shadow-xl z-50">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-3xl font-bold text-cyan-400">
          LeadSphere
        </h1>

        <p className="text-gray-400 text-sm">
          CRM Pro
        </p>

      </div>

      <div className="flex-1 mt-6">

        {menu.map((item) => (

          <button
  key={item.title}
  onClick={() => {
    setActive(item.id);
    scrollToSection(item.id);
  }}
  className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 text-left ${
    active === item.id
      ? "bg-cyan-500 text-white"
      : "hover:bg-slate-700"
  }`}
>
  <span className="text-xl">{item.icon}</span>
  {item.title}
</button>
        ))}

      </div>

      <button
        onClick={() => {
          localStorage.removeItem("loggedIn");
          window.location.reload();
        }}
        className="flex items-center gap-4 px-6 py-5 hover:bg-red-600 transition-all"
      >

        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}