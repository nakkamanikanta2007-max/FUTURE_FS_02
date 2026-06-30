import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";
import FollowUps from "./pages/FollowUps";
import Settings from "./pages/Settings";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/followups" element={<FollowUps />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;