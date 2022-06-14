import React, { Component, Fragment } from "react";
import firstPage from "../view/firstPage";
import secondPage from "../view/secondPage";
import { observar } from "mobx";

@inject("megaStore")
@observer
class megaContailner extends Component {
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
