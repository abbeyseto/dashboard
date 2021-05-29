import React, { useState } from "react";
import Select from "react-select";

export default function Dropdown(props) {
  console.log(props);
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
        option: (base) => ({
          ...base,
          border: "1px solid #EBEBEB",
          borderRadius: "4px",
          height: "90%",
        }),
        control: () => ({
          borderRadius: "5px",
          background: "#F5F5F5",
          width: "70px",
          display: "flex",
        }),
      }}
      defaultValue={currency[0]}
      options={currency}
    />
  );
}
