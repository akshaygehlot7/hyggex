import React from "react";
import { SlHome } from "react-icons/sl";
import Study from "./Study";
import Questions from "./Questions";
import Faq from "../../Components/Faq/Faq";

const Home = () => {
  return (
    <div className="grid w-full">
      <div className="mt-5 flex gap-2 items-center text-1xl">
        <SlHome /> 
        <h1>&gt; Flashcard &gt; Mathematics <span className="text-login-blue">&gt; Relation and Function</span></h1>
      </div>
      <div className="flex mt-8 mb-8">
        <h1 className="w-full text-justify text-login-blue text-2xl">
          Relation and Functions (Mathematics)
        </h1>
      </div>
      <Study />
      <Questions />
      <Faq />
    </div>
  );
};

export default Home;
