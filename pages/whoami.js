import axios from "axios";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { checkServerSideCookie } from "../store/actions/authActions";

const Whoami = ({ user }) => (
  <Layout title="Who Am I">
    {(user && (
      <div>
        <h2>Who am i</h2>
        {JSON.stringify(user)}
      </div>
    )) ||
      "Please sign in"}
  </Layout>
);

Whoami.getInitialProps = async (ctx) => {
  checkServerSideCookie(ctx);
  const token = ctx.store.getState().auth.token;
  if (token) {
    return {
      user: "test",
    };
  }
};

export default connect(null)(Whoami);
