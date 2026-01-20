import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>
        <p>hi.</p>
      </h2>
      <button onClick={() => navigate("/login")}> Goto Login </button>
    </div>
  );
}
