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
        <form onSubmit={handleSubmit}>
          <h2>註冊 / 登入</h2>
          <img src="/public/login.png" className="login-icon" />
          <div>
            <label htmlFor="email">帳號：</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">密碼：</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">送出</button>
        </form>
        <p>還沒有註冊？點擊此連結註冊</p>
      </>
    );
}