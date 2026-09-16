import { useState } from "react";

function App() {
  const [message, setMessage] = useState("尚未測試");

  const apiBaseUrl =
    window.location.port === "8021"
      ? "http://localhost:8022"
      : "http://localhost:5152";

  const testBackend = async () => {
    try {
      const response = await fetch(
        `${apiBaseUrl}/api/deployment-test`
      );

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("無法連線到後端 API");
    }
  };

  return (
    <main style={{ padding: "40px" }}>
      <h1>IIS Deployment POC</h1>

      <p>Frontend Status：React is running</p>

      <button onClick={testBackend}>
        測試 Backend API
      </button>

      <p>Backend Status：{message}</p>
    </main>
  );
}

export default App;