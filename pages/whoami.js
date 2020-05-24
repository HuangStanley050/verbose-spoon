import axios from "axios";
import { connect } from "react-redux";
import Layout from "../components/Layout";

const Whoami = ({ user }) => (
  <Layout title="Who Am I">
    <h2>Who am i</h2>
    {JSON.stringify(user)}
  </Layout>
);

Whoami.getInitialProps = async (ctx) => {
  const token = ctx.store.getState().auth.token;
  if (token) {
    return {
      user: "test",
    };
  }
};

export default connect((state) => state)(Whoami);
