import API from "../services/api";

function TestApi() {
  const addLead = async () => {
    const res = await API.post("/leads", {
      name: "Manikanta",
      email: "manikanta@gmail.com",
      source: "LinkedIn",
      status: "New",
      notes: "Interested",
      followUp: "2026-06-30",
    });

    console.log(res.data);
    alert("Lead Added");
  };

  return (
    <button onClick={addLead}>
      Test Add Lead
    </button>
  );
}

export default TestApi;