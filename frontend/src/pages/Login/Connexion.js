import { useEffect, useState } from "react";
import eye from "../../assets/Icons/eye.svg";
import { NavLink } from "react-router-dom";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [eyes, setEyes] = useState(false);

  const showPwd = () => {
    setEyes(!eyes);
  };

  useEffect(() => {
    const regexEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    if (email === "") {
      setValidEmail(null);
    } else {
      setValidEmail(regexEmail.test(email));
    }
  }, [email]);
  useEffect(() => {
    const regexPwd =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
    if (pwd === "") {
      setValidPwd(null);
    } else {
      setValidPwd(regexPwd.test(pwd));
    }
  }, [pwd]);

  return (
    <section className="text-center">
      <form className="my-4">
        <div className="flex flex-col ">
          <label htmlFor="email">Adresse mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`border-2  m-auto ${
              validEmail !== null
                ? validEmail
                  ? "border-green-500"
                  : "border-red-500"
                : ""
            }`}
          />
          <span
            className={`text-sm mb-2 ${
              validEmail ? "text-green-600" : "text-red-500"
            }`}
          >
            {validEmail !== null
              ? validEmail
                ? "Email valide "
                : "Email non valide"
              : ""}
          </span>

          <label htmlFor="pwd">Mot de passe</label>
          <div className="relative m-auto">
            <input
              type={eyes ? "text" : "password"}
              name="pwd"
              id="pwd"
              onChange={(e) => setPwd(e.target.value)}
              className={` border-2  m-auto  ${
                validPwd !== null
                  ? validPwd
                    ? "border-green-500"
                    : "border-red-500"
                  : ""
              }`}
            />
            <img
              src={eye}
              alt="show password"
              id="eye"
              className="w-5 absolute right-2 top-1"
              onClick={showPwd}
            />
          </div>

          <span
            className={`text-sm mb-2 w-1/2 m-auto ${
              validPwd !== null
                ? validPwd
                  ? "text-green-600"
                  : "text-red-500"
                : ""
            }`}
          >
            {validPwd !== null
              ? validPwd
                ? "Mot de passe valide"
                : "Mot de passe non valide, minimum 6 caractère, 1 majuscule, 1 minuscule, 1 chiffre, un caractère special : #?!@$ %^&*-"
              : ""}
          </span>

         
            
        </div>
        <button type="submit" className=" bg-orange-500 rounded-xl p-2 mt-2">
          Je m'inscrit
        </button>
      </form>
      <NavLink to="/register">
        <button className="my-4">Inscrivez-vous</button>{" "}
      </NavLink>
    </section>
  );
};

export default Connexion;
