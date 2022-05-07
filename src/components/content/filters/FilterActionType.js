import React, { useState, useEffect } from "react";
import { Button, Radio } from "antd";
/*
    height: "fit-content",
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily: "Roboto",  
    padding: "4px 24px",
    margin: "0 12px",
    border: "1px solid #fff",
*/
const radioValues = [
  { label: "Arrendar", value: "a" },
  { label: "Comprar", value: "b" },
  { label: "Proyectos", value: "c" },
];

const FilterActionType = () => {
  const [buttonOptions, setButtonOptions] = useState([]);
  const [actionType, setActionType] = useState(radioValues[0].value);

  const defineOptions = () => {
    const temp = radioValues.map((ele) => {
      return (
        <Button
          size="large"
          className="font-bold text-lg w-32 rounded-3xl border-0 shadow-none text-houmtxt-button hover:bg-gray-100 hover:text-houmtxt-button focus:text-white focus:bg-houmbg-focusBtn"
          onClick={() => setActionType(ele.value)}
        >
          {ele.label}
        </Button>
      );
    });
    setButtonOptions(temp);
  };

  useEffect(() => {
    defineOptions();
  }, []);

  return (
    <div className="mb-6 p-1 shadow-md rounded-3xl flex justify-between">
      {buttonOptions}
    </div>
  );
};

export default FilterActionType;
