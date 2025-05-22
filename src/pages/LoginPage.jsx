import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/common/global.css";
import "../assets/css/login-page.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Language: javascript
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      const response = await fetch("/api/login/public/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        redirect: "manual",
        body: new URLSearchParams({
          email: email.value,
          password: password.value,
        }),
      });
      if (response.status === 302) {
        const redirectUrl = response.headers.get("Location");
        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate("/my-page");
        }
      } else if (response.ok) {
        navigate("/my-page");
      } else {
        console.log(response);
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <main>
        <article className="container">
          <header>
            <h2>Log In</h2>
          </header>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button type="submit">Log In</button>
          </form>
          {error && (
            <section className="error-message">
              <p>{error}</p>
            </section>
          )}
          <aside className="extra-info">
            <p>By logging in, you agree to our </p>
            <p>
              Don&apos;t have an account?{" "}
              <a href="/registerPage" className="register-link">
                Register here
              </a>
            </p>
          </aside>
        </article>
      </main>
    </>
  );
}
