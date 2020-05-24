import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/fooActions";
import Layout from "../components/Layout";
import { wrapper } from "../store/setupStore";

const Index = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPosts();
  };
  return (
    <Layout>
      <div>
        {/*<div>Prop from Redux {JSON.stringify(props.foo)}</div>*/}
        <div>
          <ul style={{ listStyle: "none" }}>
            {props.foo.foo.map((user, index) => {
              return (
                <li style={{ textDecoration: "none" }} key={index}>
                  {JSON.stringify(user.title)}
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={handleSubmit}>Load</button>
      </div>
    </Layout>
  );
};
Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
  await store.dispatch(getPosts());
};

const mapState = (state) => ({
  foo: state.foo,
});

export default connect(mapState, { getPosts })(Index);
