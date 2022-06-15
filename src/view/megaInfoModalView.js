import React, { Component } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Button from "@mui/material/Bitton";
import columnDefs from "../helper/index";

class firstModalView extends Component {
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
          animateRows={true} //rowAnimation
          suppressRowClickSelection={true} //click시 행 선택 안됨
          rowSelection={"multiple"} //multi row select
          enableCellTextSelection={true} //drag시 일반 텍스트 선택
          onSelectionChanged={onSelectionChanged} //select checkBox Data 가져오기
        />
      </div>
    );
  }
}

export default firstModalView;
