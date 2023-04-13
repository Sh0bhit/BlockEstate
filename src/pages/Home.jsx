import {
  Navbar,
  Hero,
  Aim,
  Features,
  Contact,
  Need,
  Footer,
} from "../components";
import { navHomeLinks } from "../data/constants";

export default function Home({ totalSupply, uniqueBrokers }) {
  return (
    <div>
      <Navbar link={navHomeLinks} page="home" />
      <Hero totalSupply={totalSupply} uniqueBrokers={uniqueBrokers} />
      <Aim />
      <Features />
      <Need />
      <Contact />
      <Footer />
    </div>
  );
}
