import React from "react";
import { sidebarMenu, sidebarProfile } from "../constants/constants";

export default function Sidebar() {
  return (
    <div className="sm:flex hidden">
      <div className="fixed features-gradient top-[100px] h-[85%] w-[200px]">
        <h1 className="text-primary font-orbitron px-5 pt-5 opacity-70">
          Menu
        </h1>
        <hr className="w-[80%] mx-auto my-2 opacity-50" />
        <div className="flex flex-col gap-5 my-5">
          {sidebarMenu.map((menu) => {
            return (
              <div
                className="flex gap-2 w-[80%] mx-auto cursor-pointer"
                key={menu.tittle}
              >
                <img src={menu.image} alt={menu.tittle} />
                <h1 className="text-primary font-poppins text-[14px]">
                  {menu.tittle}
                </h1>
              </div>
            );
          })}
        </div>

        <h1 className="text-primary font-orbitron px-5 opacity-70">Profile</h1>
        <hr className="w-[80%] mx-auto my-2 opacity-50" />
        <div className="flex flex-col gap-5 my-5">
          {sidebarProfile.map((menu) => {
            return (
              <div
                className="flex gap-2 w-[80%] mx-auto cursor-pointer rounded-[5px]"
                key={menu.tittle}
              >
                <img src={menu.image} alt={menu.tittle} />
                <h1 className="text-primary font-poppins text-[14px]">
                  {menu.tittle}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
