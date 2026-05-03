import { api } from "../api";

export default function StartInterview() {
  const start = async () => {
    const res = await api.post("/start", {
      user_id: "123",
      domain: "EEE",
      mode: "voice"
    });
    alert(res.data.question);
  };

  return <button onClick={start}>Start Interview</button>;
}

