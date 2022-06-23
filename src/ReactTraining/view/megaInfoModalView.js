import React, { Component, useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import columnDefs from "../helper/index";
import Button from "@mui/material/Button";

class megaInfoModalView extends Component {
  state = {
    defalutColDefs: {
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      resizable: true,
    },
  };

  render() {
    const { columnDefs, rowdata } = this.state;
    return (
      <div>
        <AgGridReact
          rowData={rowdata} //tableData
          columnDefs={columnDefs} //headerTable
          animateRows={true} //rowAnimationcmd
          suppressRowClickSelection={true} //click시 행 선택 안됨
          rowSelection={"multiple"} //multi row select
          enableCellTextSelection={true} //drag시 일반 텍스트 선택
          // onSelectionChanged={onSelectionChanged} //select checkBox Data 가져오기
        />

        <Button variant="contained" color="primary">
          {" "}
          {/* 사용한다. Hello World */}
        </Button>
      </div>
    );
  }
}

export default megaInfoModalView;
