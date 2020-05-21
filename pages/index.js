import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/fooActions";
import Layout from "../components/Layout";

const Index = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPosts();
  };
  return (
    <Layout>
      <div>
        <div>Prop from Redux {JSON.stringify(props)}</div>
        <button onClick={handleSubmit}>Load</button>
        <div>Prop from getInitialProps {props.custom}</div>
      </div>
    </Layout>
  );
};
Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
  await store.dispatch(getPosts());

  return { custom: "custom" };
};
const mapState = (state) => ({
  foo: state.foo,
});

export default connect(mapState, { getPosts })(Index);
