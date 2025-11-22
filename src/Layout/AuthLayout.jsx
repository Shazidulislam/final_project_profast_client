import React from "react";
import authImg from "../assets/potho/authImage.png"
import { Outlet } from "react-router";
import ProfastButton from "../Componenet/Button/ProfastButton";
const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200 ">
        <div>
            <ProfastButton/>
        </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <img
          src={authImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
       </div>
        <div className="flex-1">
         <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
