import React, { useState, useEffect } from "react";

import { Button } from "antd";

const radioValues = [
  { label: "Albums", value: "albums" },
  { label: "Artistas", value: "artist" },
  { label: "Tracks", value: "tracks" },
];

const FilterType = () => {
  const [buttonOptions, setButtonOptions] = useState([]);
  const [actionType, setActionType] = useState(radioValues[0].value);

  const defineOptions = () => {
    const temp = radioValues.map((ele) => {
      return (
        <Button
          size="large"
          className="font-bold text-lg w-32 rounded-3xl border-0 shadow-none text-houmtxt-button bg-white hover:bg-gray-100 hover:text-houmtxt-button focus:text-white focus:bg-houmbg-focusBtn"
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

export default FilterType;
