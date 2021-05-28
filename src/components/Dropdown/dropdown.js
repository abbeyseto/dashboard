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
        <div >
          <select className={"options"} style={{width: width}} onChange={(e) => onChangeOption(e)}>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
      )}
    </>
  );
}

export default Dropdown;
