import { useState } from "react";
import { NavLink } from "react-router-dom";


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };

  return (
    <>
      <button
        className={`flex flex-col justify-around h-16 w-16`}
        onClick={toggleMenu}
      >
        <span
          className={`bg-red-500 h-1 w-full  duration-300  ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        ></span>
        <span
          className={`bg-red-500 h-1 w-full  duration-300  ${
            isOpen ? "-rotate-45 -translate-y-5" : ""
          }`}
        ></span>
        <span
          className={`bg-red-500 h-1 w-full  duration-300  ${isOpen && "hidden"}`}
        ></span>
      </button>
      {isOpen && (
        <div className="bg-red-700 w-52 h-52">
            <h2 className="text-white text-2xl font-bold">Tableau de bord</h2>
            <ul>
            <NavLink to="" className="hover:text-white text-center"><li>Consommation Totale</li></NavLink>
            <NavLink to="" className="hover:text-white text-center"><li>Économie Potentielles</li></NavLink>
            <NavLink to="" className="hover:text-white text-center"><li>Alertes</li></NavLink>
            <NavLink to="connexion" className="hover:text-white text-center"><li>Se connecter</li></NavLink>
            </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
