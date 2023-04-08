import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ setUploadToggle }) {
  return (
    <div className="fixed sm:hidden bottom-[-10px] glass-gradient w-full h-[100px] roun z-[5]">
      <div className="text-primary flex justify-around ">
        <div className="flex flex-col mt-5 gap-1 cursor-pointer">
          <img
            src="/images/sidebar/store.svg"
            className="w-8 h-8 mx-auto"
            alt="Market"
          />
          <h1 className={`font-orbitron text-[9px] opacity-50 text-center`}>
            Market
          </h1>
        </div>
        <div className="flex flex-col mt-5 gap-1 cursor-pointer">
          <img
            src="/images/sidebar/dashboard.svg"
            className="w-8 h-8 mx-auto"
            alt="Dashboard"
          />
          <h1 className={`font-orbitron text-[9px] opacity-50 text-center`}>
            Dashboard
          </h1>
        </div>

        <div className="flex flex-col mt-5 gap-1 cursor-pointer">
          <Link to="mobileUpload">
            <img
              src="/images/sidebar/Upload.svg"
              className="absolute left-[50%] -translate-x-1/2 bottom-14"
              alt="Upload"
            />
          </Link>

          <h1 className="font-orbitron text-[9px] opacity-50 text-center mt-9 mr-1 ">
            Upload
          </h1>
        </div>
        <div className="flex flex-col mt-5 gap-1 cursor-pointer">
          <img
            src="/images/sidebar/favorite.svg"
            className="w-8 h-8 mx-auto"
            alt="Favorite"
          />
          <h1 className={`font-orbitron text-[9px] opacity-50 text-center`}>
            Favorite
          </h1>
        </div>
        <div className="flex flex-col mt-5 gap-1 cursor-pointer">
          <img
            src="/images/sidebar/pf-settings.svg"
            className="w-8 h-8 mx-auto"
            alt="Settings"
          />
          <h1 className={`font-orbitron text-[9px] opacity-50 text-center`}>
            Settings
          </h1>
        </div>
      </div>
    </div>
  );
}
