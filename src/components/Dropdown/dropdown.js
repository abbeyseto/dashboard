import React from "react";
import Select from "react-select";

export default function Dropdown(props) {
  const currency = [
    { value: "NGN", label: "NGN" },
    { value: "USD", label: "USD" },
    { value: "GBP", label: "GBP" },
    { value: "YEN", label: "YEN" },
  ];

  return (
    <Select
      closeMenuOnSelect={true}
      // components={{ Option }}
      styles={{
        option: (provided, state) => ({
          ...provided,
          borderTop: "1px solid #EBEBEB",
          background: state.isSelected ? "#EBEBEB" : "#fff",
          color: state.isSelected && "#000000",
          height: "90%",
        }),
        control: () => ({
          borderRadius: "5px",
          background: "#F5F5F5",
          width: "70px",
          display: "flex",
        }),
        indicatorsContainer: () => ({
          padding: "4px 0px",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        dropdownIndicator: () => ({
          padding: 0,
        }),
        menu: (provided, state) => ({
          ...provided,
          padding: 0,
          borderRadius: "10px",
          top: "90%",
          width: "100px",
          right: "0px",
          border: 0,
        }),
        menuList: (provided, state) => ({
          ...provided,
          color: state.isSelected && "#000000",
          background: "#fff",
          top: "90%",
        }),
      }}
      defaultValue={currency[0]}
      options={currency}
    />
  );
}
