const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "../data/leads.json");

const getLeads = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const saveLeads = (leads) => {
  fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
};

router.get("/", (req, res) => {
  res.json(getLeads());
});

router.post("/", (req, res) => {
  const leads = getLeads();

  const newLead = {
    id: Date.now(),
    ...req.body,
  };

  leads.push(newLead);
  saveLeads(leads);

  res.json(newLead);
});

router.delete("/:id", (req, res) => {
  let leads = getLeads();

  leads = leads.filter(
    (lead) => lead.id !== Number(req.params.id)
  );

  saveLeads(leads);

  res.json({
    message: "Lead deleted",
  });
});
router.put("/:id", (req, res) => {
  let leads = getLeads();

  const id = Number(req.params.id);

  leads = leads.map((lead) =>
    lead.id === id ? { ...lead, ...req.body, id } : lead
  );

  saveLeads(leads);

  res.json({ message: "Lead updated" });
});
module.exports = router;
router.put("/:id", (req, res) => {
  let leads = getLeads();

  const id = Number(req.params.id);

  leads = leads.map((lead) =>
    lead.id === id ? { ...lead, ...req.body, id } : lead
  );

  saveLeads(leads);

  res.json({
    message: "Lead updated",
  });
});

module.exports = router;