import React from "react";

import Arrow from "../assets/arrow.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full pl-[101px] flex h-[110px] items-center pb-6 pt-[38px] border border-[#ECEEEB]">
      <span className="bg-[#F8F8F8] pt-3 pr-[19px] pb-3 pl-[19px] rounded-[99px] mr-[19px] w-[62px]">
        <img src={Arrow} alt="arrow icon picture" />
      </span>
      <h1 className="text-xl font-medium mr-[9px]">Account Verification</h1>
      <span className="ml-2 text-sm text-[#6F6FFF] bg-[#5552D914] rounded-[3px] pl-[5px] pt-[1px] pr-[6px] pb-[1px]">In progress</span>
    </header>
  );
};

export default Header;
