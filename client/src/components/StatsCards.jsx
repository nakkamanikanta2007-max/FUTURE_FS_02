import {
  FaUsers,
  FaUserCheck,
  FaBullseye,
  FaTimesCircle,
} from "react-icons/fa";

export default function StatsCards({ leads }) {
  const total = leads.length;
  const converted = leads.filter(
    (l) => l.status === "Converted"
  ).length;

  const qualified = leads.filter(
    (l) => l.status === "Qualified"
  ).length;

  const lost = leads.filter(
    (l) => l.status === "Lost"
  ).length;

  const cards = [
    {
      title: "Total Leads",
      value: total,
      color: "from-blue-500 to-cyan-500",
      icon: <FaUsers size={28} />,
    },
    {
      title: "Converted",
      value: converted,
      color: "from-green-500 to-emerald-500",
      icon: <FaUserCheck size={28} />,
    },
    {
      title: "Qualified",
      value: qualified,
      color: "from-purple-500 to-pink-500",
      icon: <FaBullseye size={28} />,
    },
    {
      title: "Lost",
      value: lost,
      color: "from-red-500 to-orange-500",
      icon: <FaTimesCircle size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition duration-300`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">
                {card.title}
              </p>

              <h1 className="text-4xl font-bold mt-3">
                {card.value}
              </h1>
            </div>

            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}