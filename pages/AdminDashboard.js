import { useEffect, useState } from "react";
import { api } from "../api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("/admin/dashboard").then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Interviews: {stats.total_interviews}</p>
      <p>Average Score: {stats.average_score}</p>
    </div>
  );
}

