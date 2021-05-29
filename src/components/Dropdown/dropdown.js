import React, { useState } from "react";
import "./dropdown.css";
function Dropdown(props) {
  const { options, width } = props;
  const [selected, setSelected] = useState(null);

  const onChangeOption = (e) => {
    setSelected(e.target.value);
  };
  return (
    <>
      {options && options.length > 0 && (
        <div class="select">
          <select id="standard-select" style={{width: width}} onChange={(e) => onChangeOption(e)}>
            {options.map((option, index) => {
              return <option key={index} className={"option"}>{option}</option>;
            })}
          </select>
          <span class="focus"></span>
        </div>
      )}
    </>
  );
}

export default Dropdown;
