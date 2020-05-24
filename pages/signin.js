import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { authenticate } from "../store/actions/authActions";

const Signin = ({ login }) => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("Test@1234");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    //console.log("login with ", { email, password });
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
//Signin.getInitialProps = (ctx) => {};
const mapDispatch = (dispatch) => ({
  login: ({ email, password }) => dispatch(authenticate({ email, password })),
});
export default connect(null, mapDispatch)(Signin);
