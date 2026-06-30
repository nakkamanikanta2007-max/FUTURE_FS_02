import { saveAs } from "file-saver";

export const exportCSV = (leads) => {
  const headers = [
    "Name",
    "Email",
    "Source",
    "Status",
    "Follow Up",
    "Notes",
  ];

  const rows = leads.map((lead) => [
    lead.name,
    lead.email,
    lead.source,
    lead.status,
    lead.followUp,
    lead.notes,
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  saveAs(blob, "LeadSphere-Leads.csv");
};