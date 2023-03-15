import React from "react";
import {
  SidebarLeft,
  SidebarRight,
  Topbar,
  Cards,
  Banner,
} from "../components";

export default function Main() {
  return (
    <>
      <Topbar />
      <SidebarLeft />
      <SidebarRight />
      <section className="sm:mx-[230px] mx-auto sm:w-auto w-[80%]">
        <Banner />
        <Cards />
      </section>
    </>
  );
}
