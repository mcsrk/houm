import { useContext } from "react";

// Utils
import SpotifyContext from "context/spotifyContext";

// Consts
import { filterTypeButtons } from "utils/constans";


const getOptionButtons = (actionType, setActionType) => {
  const optionButtons = filterTypeButtons.map((e) => {
    const active = e.value === actionType;
    return (
      <span
        key={"option-" + e.value}
        className={`p-2 cursor-pointer font-bold text-lg w-32 rounded-3xl  text-houmtxt-button ${
          active
            ? "bg-houmbg-focusBtn text-white"
            : "bg-white hover:bg-gray-100 hover:text-houmtxt-button"
        } `}
        onClick={() => setActionType(e.value)}
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
    <div className="mb-6 p-1 shadow-md rounded-3xl flex justify-between max-w-md">
      {getOptionButtons(queryType, setQueryType)}
    </div>
  );
};

export default FilterType;
