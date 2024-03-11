import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <div className={checked ? "dark-mode" : ""}>
      <div
        className="ml-4 relative inline-block w-12 h-6 rounded-full cursor-pointer bg-sky-400"
        onClick={handleChange}
      >
        <div
          className={`absolute w-6 h-6 rounded-full bg-white ${
            checked ? "transform translate-x-full" : ""
          }`}
        ></div>
      </div>
      <div>
        <h1
          className={`ml-[640px] font-bold text-3xl underline ${
            checked ? "text-white" : ""
          }`}
        >
          Nauman Zaib
        </h1>
        <p className={`ml-[480px] ${checked ? "text-white" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          ratione <br /> nobis vel, mollitia asperiores suscipit dolore possimus
          ipsum illum itaque.
        </p>
      </div>
    </div>
  );
};

export default App;
