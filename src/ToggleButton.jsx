// import React, { useState } from "react";
// import "./App.css";
// export default function App() {
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked((prevChecked) => !prevChecked);
//   };

//   return (
//     <div className={checked ? "dark-mode" : ""}>
//       <div
//         className="relative inline-block w-12 h-6 bg-sky-500 rounded-full p-0.75 cursor-pointer"
//         onClick={handleChange}
//       >
//         <div
//           className={`absolute w-6 h-6 bg-white rounded-full shadow ${
//             checked ? "transform translate-x-full" : ""
//           }`}
//         ></div>
//       </div>
//       <div className="pt-20 grid">
//         <h1
//           className={`ml-[640px] font-bold underline font text-3xl ${
//             checked ? "text-white" : ""
//           }`}
//         >
//           hello world
//         </h1>
//         <p className={`ml-[440px] ${checked ? "text-white" : ""}`}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
//           commodi! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Voluptatum, commodi!
//         </p>
//       </div>
//     </div>
//   );
// }
