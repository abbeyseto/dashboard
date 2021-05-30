import React from "react";
import NA from "../../assets/images/curved-arrow.png";
import "./style.css";

function NotAvailable(props) {
  return (
    <div className="not-available">
      <img src={NA} alt="page not available" className="na-image" />
      <div className="na-container">
        <h3 className="na-heading">
          Please go to <strong>Balances</strong> menu
        </h3>
        <p className="na-body">This page is under construction ... </p>
      </div>
    </div>
  );
}

export default NotAvailable;
