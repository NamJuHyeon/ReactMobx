import React, { Component, Fragment } from "react";
import firstPage from "../view/firstPage";
import { observar } from "mobx";

@inject("megaStore")
@observer
class megaContailner extends Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <firstPage />
      </Fragment>
    );
  }
}

export default megaContailner;
