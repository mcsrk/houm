import { useContext } from "react";

// Utils
import SpotifyContext from "context/spotifyContext";

// Consts
import { filterTypeButtons } from "utils/constans";

const getOptionButtons = (queryType, setQueryType) => {
  const optionButtons = filterTypeButtons.map((e) => {
    const active = e.value === queryType;
    return (
      <span
        key={"option-" + e.value}
        className={`text-sm sm:text-lg m-2 p-1 cursor-pointer font-bold w-32 rounded-3xl shadow-sm text-center text-houmtxt-button ${
          active
            ? "bg-houmbg-focusBtn text-white"
            : "bg-white hover:bg-gray-100 hover:text-houmtxt-button"
        } `}
        onClick={() => setQueryType(e.value)}
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
    <div className="w-60 sm:w-96 m-6 bg-white shadow-md rounded-3xl flex justify-between">
      {getOptionButtons(queryType, setQueryType)}
    </div>
  );
};

export default FilterType;
