import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>hi.</h2>
      <button onClick={() => navigate("/login")}> Goto Login </button>
    </div>
  );
}
