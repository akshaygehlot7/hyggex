import React from "react";
import { MdOutlineLightbulb } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";

const number = "9 + 6 + 7x - 2x - 3";
const Questions = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center mb-8">
        <div
          className="bg-login-blue p-6 rounded-2xl h-64"
          style={{ width: "28rem" }}
        >
          <div className="flex justify-between w-96">
            <MdOutlineLightbulb size={25} className="text-white" />
            <IoMdVolumeHigh size={25} className="text-white" />
          </div>
          <div className="text-white flex items-center justify-center h-44 text-2xl">
            {number}
          </div>
        </div>
        <div className="flex items-center w-96 justify-between mt-3">
          <IoMdRefresh size={30} className="text-login-blue" />
          <div className="flex items-center gap-2">
            <IoIosArrowDropleft size={30} className="text-login-blue" />
            <h1 className="p-6">01/10</h1>
            <IoIosArrowDropright size={30} className="text-login-blue" />
          </div>
          <RiFullscreenLine size={30} className="text-login-blue" />
        </div>
        <div className="flex w-full justify-between">
          <span className="text-black">
            <img className="w-52" src="/image.png" alt="Logo" />
          </span>
          <div className="flex items-center gap-2">
            <FaCirclePlus size={30} className="text-login-blue" />
            <h1 className="text-login-blue">Create Flashcard</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
