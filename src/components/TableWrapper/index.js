import React from "react";
import SearchIcon from "../../assets/images/Search.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Table from ""
import "./style.css";
import moment from "moment";

function Wrapper() {
  const [date, setDate] = React.useState();
  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick, onChange }, ref) => (
      <div className="searchContainer">
        <input
          placeholder={moment().format("MMMM YYYY")}
          className="custom-date searchBox"
          value={value && moment(value).format("MMMM YYYY")}
          onClick={onClick}
          onChange={onChange}
          ref={ref}
        />
        <i className="fa fa-calendar searchIcon"></i>
      </div>
    )
  );

  return (
    <div>
      <section className="search-wrapper">
        <span className="table-title">Payout Table</span>
        <div className="search-payout-container">
          <div className="searchContainer">
            <input
              className="custom-input searchBox"
              type="search"
              name="search"
              placeholder="Search something..."
            />
            <img className="searchIcon" src={SearchIcon} alt="search-icon"/>
          </div>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            customInput={<ExampleCustomInput />}
          />
          <button className="payout-button">Payout</button>
        </div>
      </section>
    </div>
  );
}

export default Wrapper;
