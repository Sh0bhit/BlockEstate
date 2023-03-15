import React from "react";
import SidebarWallet from "./SidebarWallet";
import SidebarTrending from "./SidebarTrending";

export default function SidebarRight() {
  return (
    <div className="fixed right-0 top-[100px] w-[200px] mr-5">
      <div className="sm:flex hidden justify-end flex-col gap-5">
        <SidebarWallet />
        <SidebarTrending />
      </div>
    </div>
  );
}
