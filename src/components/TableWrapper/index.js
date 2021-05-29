import React from "react";
import "./style.css"
function index(props) {
  return (
    <div>
      <section className="section">
        <form className="form" id="addItemForm">
          <input
            type="text"
            className="input"
            id="addInput"
            placeholder="Something that needs ot be done..."
          />
          <button className="button is-info">
            Payout
          </button>
        </form>
      </section>
    </div>
  );
}

export default index;
