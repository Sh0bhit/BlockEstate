import { Navbar, Hero, Aim, Features, Contact, Need } from "../components";
import { navHomeLinks } from "../constants/constants";

export default function Home() {
  return (
    <div>
      <Navbar link={navHomeLinks} page="home" />
      <Hero />
      <Aim />
      <Features />
      <Need />
      <Contact />
    </div>
  );
}
