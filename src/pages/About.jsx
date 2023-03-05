import React from "react";
import Navbar from "../components/Navbar";
import { navAboutLinks } from "../constants/constants";

export default function About() {
  return <Navbar link={navAboutLinks} page="about" />;
}
