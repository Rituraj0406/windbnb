import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState as _useState } from "../../context/State";
import { setSelectedLocation, setGuest } from "../../context/Action";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Select from "react-select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FilterPanel = ({ open, maxWidth = "sm", handleClose }) => {
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [totalGuests, setTotalGuests] = useState(adults + children);
  const [selectedOption, setSelectedOption] = useState(null);

  const { properties, dispatch } = _useState();

  // location filter input

  const locationsSet = new Set(
    properties.map((item) => `${item.city}, ${item.country}`)
  );

  const locationsList = Array.from(locationsSet).map((location) => ({
    label: location,
    value: location,
  }));
  const handleChangeLocation = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectedLocation(dispatch, selectedOption.value);
  };

  const handleInputGuestChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleFocus = () => {
    setFocused(true);
  };

  const handleAdd = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    }
    setTotalGuests(totalGuests + 1);
  };

  const handleRemove = (type) => {
    if (type === "adults" && adults > 0) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
      setTotalGuests(totalGuests - 1);
    }
  };
  useEffect(() => {
    setGuest(dispatch, totalGuests);
  }, [dispatch, totalGuests]);

  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogContent>
        <div
          className=" flex flex-col py-4 px-2.5 md:px-0 h-[600px] md:h-[500px] relative"
          style={{ backgroundColor: "white" }}
        >
          <div className="flex justify-between mb-[16px] items-center md:hidden">
            <p className="text-start pl-1 font-bold text-xs">
              Edit your search
            </p>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div
            className="shadow-c flex flex-col md:flex-row w-full rounded-2xl h-fit"
            id="filter-div"
          >
            <div className="w-full">
              <label className="text-start text-xs pl-2.5">Location</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={selectedOption}
                onChange={handleChangeLocation}
                name="location"
                options={locationsList}
                style={{ outline: "2px solid blue" }}
              />
            </div>
            <span className="border-r border-[#F2F2F2] h-[64px] hidden md:block"></span>
            <hr />
            {/* Guest section */}
            <div className="w-full">
              <div className="flex flex-col pt-2">
                <label className="text-start text-xs pl-2.5">Add Guest</label>
                <input
                  type="text"
                  placeholder="Add Guest"
                  onFocus={handleFocus}
                  value={`${totalGuests} guests`}
                  onChange={handleInputGuestChange}
                  className="text-gray-900 text-sm rounded-lg focus:outline-slate-800 block w-full p-2.5 h-10"
                />
              </div>
              {focused && (
                <div
                  id="age-list"
                  className="flex flex-col absolute bg-white w-full mt-4"
                >
                  <div className="text-start pt-8 pb-4 pr-4">
                    <p className="text-sm font-bold">Adults</p>
                    <p className="text-sm text-[#BDBDBD] mb-2">
                      Age 13 or above
                    </p>
                    <div>
                      <IconButton
                        sx={{
                          border: "1px solid black",
                          borderRadius: "4px",
                          padding: "0px",
                        }}
                        onClick={() => handleAdd("adults")}
                      >
                        <AddIcon />
                      </IconButton>
                      <span className="mx-2">{adults}</span>
                      <IconButton
                        sx={{
                          border: "1px solid black",
                          borderRadius: "4px",
                          padding: "0px",
                        }}
                        onClick={() => handleRemove("adults")}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div className="text-start pt-8 pb-4 pr-4">
                    <p className="text-sm font-bold">Children</p>
                    <p className="text-sm text-[#BDBDBD] mb-2">Ages 2-12</p>
                    <div>
                      <IconButton
                        sx={{
                          border: "1px solid black",
                          borderRadius: "4px",
                          padding: "0px",
                        }}
                        onClick={() => handleAdd("children")}
                      >
                        <AddIcon />
                      </IconButton>
                      <span className="mx-2">{children}</span>
                      <IconButton
                        sx={{
                          border: "1px solid black",
                          borderRadius: "4px",
                          padding: "0px",
                        }}
                        onClick={() => handleRemove("children")}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterPanel;
