import React from "react";
import { SidebarLeft, SidebarRight, Topbar } from "../components";

export default function Main() {
  return (
    <>
      <Topbar />
      <SidebarLeft />
      <SidebarRight />
      <section className="sm:mx-[250px] mx-auto sm:w-auto w-[80%]"></section>
    </>
  );
}
