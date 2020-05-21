import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";

const Signin = () => {
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr9");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login with ", { email, password });
  };

  return (
    <Layout title="Sign In">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </Layout>
  );
};

export default Signin;
