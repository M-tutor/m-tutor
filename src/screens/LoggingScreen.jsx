import React from "react";
import CustomInput from "../components/CustomInput";
import MoraMaths from "../assets/Icons/MoraMaths";
import { LoginForm } from "../components/LoginForm";

function LoggingScreen(props) {
  return (
    <div className="flex">
      <div className="bg-dark h-screen w-2/5 md:w-full">
        <div>
          <div className="flex items-center justify-center text-light">
            <MoraMaths className={"md:w-28 md:h-28"}></MoraMaths>
          </div>
          <div className="text-center">
            <h2 className="text-light md:text-2xl text-4xl font-bold">
              Login to your account
            </h2>
            <h2 className="text-light text-2xl ">Let's get started</h2>
          </div>
          <LoginForm />
        </div>
      </div>
      <div>
        <img
          src={require("../assets/Images/smiling-young-geometry-teacher.png")}
          className="md:hidden"
        ></img>
      </div>
    </div>
  );
}

export default LoggingScreen;
