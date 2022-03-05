import React from "react";
import logoheading from "../img/logoheading.png";

const Heading = () => {
  return (
    <header className="bg-[#F55A5A] py-4 flex justify-center font-['Inter'] gap-2">
      <img src={logoheading} />
      <p className="text-white">my travel journal</p>
    </header>
  );
};

export default Heading;
