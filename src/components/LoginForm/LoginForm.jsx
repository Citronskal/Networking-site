import { useState } from "react";
import "./LoginForm.css";


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Login Submitted", { email, password });
    };

    return (
      <>
        <form onSubmit={handleSubmit} className="login-form">
          <img src="/public/login.png" className="login-icon" />
          <h2>Sign up / Login</h2>
          <div>
            <label htmlFor="email">Account：</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password：</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>Haven't signed up yet？Click here to sign up</p>
      </>
    );
}