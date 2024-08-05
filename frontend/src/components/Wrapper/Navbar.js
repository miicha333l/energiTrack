import React from "react";
import BurgerMenu from "../BurgerMenu";

const Navbar = () => {
  return (
    <nav>
        <BurgerMenu />
      <div className="flex flex-col items-center">
        <h1 className=" font-bold text-3xl">EnergiTrack</h1>
          <img src="" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
