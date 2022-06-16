import React, { Component, Fragment, Link } from "react";
import megaInfoModalView from "./megaInfoModalView";
import megaDeveloperModalView from "./megaDeveloperModalView";
import megasoftIntroduceModalView from "./megasoftIntroduceModalView";
class firstPage extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <p>메가소프트 인사정보</p>
          <Link to="/megaInfoModalView" />
        </div>

        <div>
          <p>메가소프트 개발자 목록</p>
          <Link to="megaDeveloperModalView" />
        </div>
        <div>
          <p>메가소프트 회사 소개</p>
          <Link to="megasoftIntroduceModalView" />
        </div>
      </Fragment>
    );
  }
}

export default firstPage;
