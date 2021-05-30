import React from "react";
import { tableData } from "./tableData";
import "./table.css";
function Table() {
  const [pagination, setPagination] = React.useState(4);
  const [disable, setDisable] = React.useState(false);

  const PageData = () => {
    var size = pagination;
    if (size > tableData.length) {
      setDisable(true);
    }
    let result = tableData.slice(0, size).map((data, index) => {
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
          <div className="col col-4 right" data-label="Amount">
            {data.amount}
          </div>
        </li>
      );
    });
    return result;
  };

  return (
    <div className="table-container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-4">Payout ID</div>
          <div className="col col-4">Source</div>
          <div className="col col-4">Date </div>
          <div className="col col-4 right">Amount</div>
        </li>
        <PageData />
      </ul>
      {disable ? (
        <div className="no-more">No more Results...</div>
      ) : (
        <button
          onClick={() => setPagination(pagination + 3)}
          disabled={disable}
          className="see-more"
        >
          See More
        </button>
      )}
    </div>
  );
}

export default Table;
