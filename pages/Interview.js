import VoiceRecorder from "../components/VoiceRecorder";
import { api } from "../api";

export default function Interview() {
  const sendAudio = async (blob) => {
    const form = new FormData();
    form.append("audio", blob);
    const res = await api.post("/speech-to-text", form);
    alert(res.data.text);
  };

  return <VoiceRecorder onStop={sendAudio} />;
}

