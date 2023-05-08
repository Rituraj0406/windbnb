import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState as _useState } from "../../context/State";
import FilterPanel from "../filter/FilterPanel";

const Search = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { selectedLocations, selectedGuests } = _useState();
  const handleOpenFilterPanel = () => {
    setOpenFilterModal(true);
  };
  const handleCloseModal = () => {
    setTimeout(() => {
      setOpenFilterModal(false);
    }, 0);
  };
  return (
    <div
      className="flex items-center rounded-[16px] shadow-md md:w-full w-4/5 mx-auto"
      onClick={handleOpenFilterPanel}
    >
      <div className="px-[16px]">
        <p className="text-sm">
          {selectedLocations ? selectedLocations : "Select Location"}
        </p>
      </div>
      <span className="border-r border-[#F2F2F2] h-[50px]"></span>
      <div className="px-[16px]">
        <p className="text-sm text-slate-400">
          {selectedGuests ? `${selectedGuests} Guests` : "No Guests"}
        </p>
      </div>
      <span className="border-r border-[#F2F2F2] h-[50px]"></span>
      <div className="px-3">
        <IconButton>
          <SearchIcon sx={{ color: "#EB5757" }} />
        </IconButton>
      </div>
      <FilterPanel
        open={openFilterModal}
        maxWidth="xl"
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default Search;
