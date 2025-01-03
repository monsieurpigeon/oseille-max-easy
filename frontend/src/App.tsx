import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_REACT_APP_API_URL + "/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Message:</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
