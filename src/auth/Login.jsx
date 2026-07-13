import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {

    const result = login(username, password);

    if (!result.success) {
      setError(result.message);
    }

  }

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9"
      }}
    >

      <div
        style={{
          width: "420px",
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,.15)"
        }}
      >

        <h2 style={{ textAlign: "center" }}>
          HHI-SA Operations Platform
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px"
          }}
        >
          Powered by Lewisham Multi Solutions Ltd
        </p>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <label>Username</label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        <label>Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

      </div>

    </div>

  );

}