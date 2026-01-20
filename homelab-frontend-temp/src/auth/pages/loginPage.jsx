import { useNavigate } from "react-router-dom";
import { userModel } from "../models/user.model.jsx";

const navigate = useNavigate();
const user = new userModel();

const Loginform = () => {
  return (
    <form className="login-container">
      <h2>Login</h2>
      <label className="formLabel" htmlFor="email">
        Email
      </label>
      <input
        className="formField"
        type="email"
        id="email"
        name="email"
        required
      />
      <br />
      <label className="formLabel" htmlFor="password">
        Password
      </label>
      <input
        className="formField"
        type="password"
        id="password"
        name="password"
        required
      />
      <br />
      <button className="formButton" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default function LoginPage() {
  return (
    <div>
      <Loginform />
    </div>
  );
}
