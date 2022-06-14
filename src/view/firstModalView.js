import React, { Component } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Button from "@mui/material/Bitton";

class firstModalView extends Component {
  state = {
    defalutColDefs: {
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      resizable: true,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          Id: "1",
          company: "megaSoft",
          location: "서울",
          avgPaddle: "3000만원",
          companyGrade: "100점",
          companyAdvantages: "훌룽한 교육시설을 갖추었습니다.",
          companyDisadvantage: "없습니다.",
        },
        {
          Id: "2",
          company: "megaSoft",
          location: "포항",
          avgPaddle: "3000만원",
          companyGrade: "100점",
          companyAdvantages: "출근할때 마다 너무 재밌습니다.",
          companyDisadvantage: "없습니다.",
        },
        {
          Id: "3",
          company: "megaSoft",
          location: "서울",
          avgPaddle: "3000만원",
          companyGrade: "100점",
          companyAdvantages: "야근이 없습니다.",
          companyDisadvantage: "없습니다.",
        },
        {
          Id: "4",
          company: "megaSoft",
          location: "서울",
          avgPaddle: "3000만원",
          companyGrade: "100점",
          companyAdvantages: "배울점이 많습니다.",
          companyDisadvantage: "없습니다.",
        },
        {
          Id: "5",
          company: "megaSoft",
          location: "서울",
          avgPaddle: "3000만원",
          companyGrade: "100점",
          companyAdvantages: "내가 있습니다.",
          companyDisadvantage: "없습니다.",
        },
      ],
      columnDefs: [
        { headerName: "회사명" },
        { headerName: "위치" },
        { headerName: "평균 연봉" },
        { haederName: "회사평점" },
        { headerName: "회사장점" },
        { headerName: "회사단점" },
      ],
    };
  }

  render() {
    const { columnDefs, data } = this.state;
    return (
      <div
        className="ag-theme-alpine"
        style={{ width: "100px", height: "50px" }}
      >
        ;
        <AgGridReact headerHeight="30" columnDefs={columnDefs} rowData={data} />
      </div>
    );
  }
}

export default firstModalView;
