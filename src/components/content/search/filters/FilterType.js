import { useContext } from "react";

// Utils
import SpotifyContext from "context/spotifyContext";

// Consts
import { filterTypeButtons } from "utils/constans";

const getOptionButtons = (_queryType, _setQueryType) => {
  const optionButtons = filterTypeButtons.map((e) => {
    const active = e.value === _queryType;
    return (
      <span
        key={"option-" + e.value}
        className={`m-2 p-1 cursor-pointer font-bold text-lg w-32 rounded-3xl shadow-sm text-center text-houmtxt-button ${
          active
            ? "bg-houmbg-focusBtn text-white"
            : "bg-white hover:bg-gray-100 hover:text-houmtxt-button"
        } `}
        onClick={() => _setQueryType(e.value)}
      >
        {e.label}
      </span>
    );
  });
  return optionButtons;
};

const FilterType = () => {
  const { queryType, setQueryType } = useContext(SpotifyContext);
  return (
    <div className="m-6 bg-white shadow-md rounded-3xl flex justify-between">
      {getOptionButtons(queryType, setQueryType)}
    </div>
  );
};

export default FilterType;
