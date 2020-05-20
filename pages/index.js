import React, { Component } from "react";
import { connect } from "react-redux";

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className="title is-2">Authentication with Next.js and JWT</h2>
      <h3>hi there</h3>
      <p>
        A proof of concept app, demonstrating the authentication of Next.js
        application using JWT.
      </p>
    </div>
  );
};
const mapState = (state) => ({
  foo: state.foo,
});
export default connect(mapState)(Index);
