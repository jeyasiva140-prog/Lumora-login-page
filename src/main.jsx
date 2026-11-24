import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <main className="login-page">
      <header className="brand-header">
        <a className="brand-logo" href="/">
          <span className="brand-icon">C</span>
          <span>LUMORA</span>
        </a>

        <button
          className="sign-in-button"
          style={{ width: "auto", padding: "12px 22px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          width: "100%",
          margin: "auto",
          padding: "80px 0",
        }}
      >
        <p style={{ color: "#8f7bff", letterSpacing: "2px" }}>
          LOGIN SUCCESSFUL
        </p>

        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          Welcome to <span style={{ color: "#7c5cff" }}>LUMORA.</span>
        </h1>

        <p style={{ color: "#a6a6b2", lineHeight: 1.8 }}>
          You have successfully signed in to your account.
          Your dashboard is ready!
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            border: "1px solid #383640",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.035)",
          }}
        >
          <h2>Dashboard</h2>
          <p style={{ color: "#a6a6b2" }}>
            This is your LUMORA demo dashboard.
          </p>
        </div>
      </section>

      <footer className="login-footer">
        <span>© 2026 LUMORA</span>
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);