export default function RecentActivity({ leads }) {
  const recentLeads = [...leads]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Recent Activity
      </h2>

      {recentLeads.length === 0 ? (
        <p className="text-gray-500">
          No recent activity.
        </p>
      ) : (
        recentLeads.map((lead) => (
          <div
            key={lead.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h3 className="font-semibold">
                {lead.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {lead.email}
              </p>
            </div>

            <span className="text-cyan-600 font-semibold">
              {lead.status}
            </span>
          </div>
        ))
      )}

    </div>
  );
}