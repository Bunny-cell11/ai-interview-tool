export default function VoiceRecorder({ onStop }) {
  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    let chunks = [];

    mediaRecorder.ondataavailable = e => chunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks);
      onStop(blob);
    };

    mediaRecorder.start();
    setTimeout(() => mediaRecorder.stop(), 5000);
  };

  return <button onClick={start}>🎙 Speak</button>;
}

