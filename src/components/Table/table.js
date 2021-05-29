import React from "react";
import { tableData } from "./tableData";
import "./table.css";
function Table(props) {
  return (
    <div className="table-container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-4">Payout ID</div>
          <div className="col col-4">Source</div>
          <div className="col col-4">Date </div>
          <div className="col col-4">Amount</div>
        </li>

        {tableData.map((data, index) => {
          return (
            <li className="table-row" key={index}>
              <div className="col col-4" data-label="Payout ID">
                {data.id}
              </div>
              <div className="col col-4" data-label="Source">
                {data.source}
              </div>
              <div className="col col-4" data-label="Date">
                {data.date}
              </div>
              <div className="col col-4" data-label="Amount">
                {data.amount}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
