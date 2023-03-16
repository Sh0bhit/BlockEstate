import React from "react";
import {
  SidebarLeft,
  SidebarRight,
  Topbar,
  Cards,
  Banner,
  BottomBar,
} from "../components";

export default function Main() {
  return (
    <div>
      <Topbar />
      <SidebarLeft />
      <SidebarRight />
      <BottomBar />
      <section className="sm:mx-[230px] mx-auto sm:w-auto w-[80%]">
        <Banner />
        <Cards />
      </section>
    </div>
  );
}
