export default function FollowUpPanel({ leads }) {
  const today = new Date().toISOString().split("T")[0];

  const followUps = leads.filter(
    (lead) => lead.followUp && lead.followUp <= today
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        📅 Today's Follow-ups
      </h2>

      {followUps.length === 0 ? (
        <p className="text-gray-500">
          No follow-ups for today.
        </p>
      ) : (
        followUps.map((lead) => (
          <div
            key={lead.id}
            className="border rounded-lg p-4 mb-3"
          >
            <h3 className="font-semibold">{lead.name}</h3>

            <p>{lead.email}</p>

            <p className="text-red-500">
              Follow-up: {lead.followUp}
            </p>
          </div>
        ))
      )}
    </div>
  );
}