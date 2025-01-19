import React from "react";
import Home from "./components/Home/Home";
import MySkills from "./components/My_Skills/MySkills";
import MyWork from "./components/My_Work/MyWork";
import Contacts from "./components/Contacts/Contacts";

const Page = () => {
  return (
    <div className = "bg-gradient-to-br from-cyan-500 to-pink-500" >
      <Home />
      <MySkills />
      <MyWork />
      <Contacts />
    </div>
  );
};

export default Page;
