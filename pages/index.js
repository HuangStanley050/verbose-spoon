import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/fooActions";

const Index = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPosts();
  };
  return (
    <div>
      <div>Prop from Redux {JSON.stringify(props)}</div>
      <button onClick={handleSubmit}>Load</button>
      <div>Prop from getInitialProps {props.custom}</div>
    </div>
  );
};
Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let result = await store.dispatch(getPosts());
  console.log(result);
  return { custom: "custom" };
};
const mapState = (state) => ({
  foo: state.foo,
});

export default connect(mapState, { getPosts })(Index);
