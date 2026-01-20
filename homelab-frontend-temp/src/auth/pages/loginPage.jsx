import { userModel } from "../models/user.model.jsx";

const user = new userModel();

const Loginform = () => {
  return (
    <form className="login-container">
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <br />
      <button type="submit">Sign In</button>
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
