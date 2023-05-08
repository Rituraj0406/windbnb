import React from "react";
import Logo from "../../assets/logo.svg";
import Search from "../search/Search";

const Navbar = () => {
  return (
    <nav className="container mx-auto md:container md:mx-auto flex flex-col md:flex-row justify-between py-5 px-3.5 md:py-8">
      <div className="flex items-center md:p-0 pb-10">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
