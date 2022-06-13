import React, { Component, Fragment } from "react";
import firstPage from "../view/firstPage";
import secondPage from "../view/secondPage";

class megaContailner extends Component {
  state() {}
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <firstPage />
        <secondPage />
      </Fragment>
    );
  }
}

export default megaContailner;
