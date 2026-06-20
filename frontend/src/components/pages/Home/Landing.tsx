import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";
import LandingHeroBanner from "./LandingHeroBanner";
import LandingWhy from "./LandingWhy";
import LandingCardsDisplay from "./LandingCardsDisplay";

interface LandingProps {}

const navOptions = ["Home", "About", "Blog", "Help"];

export default function Landing(props: LandingProps) {
  return (
    <div className="bg-(--primary-color)">
      <NavHeader
        logo="WAG!"
        options={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Blog", path: "/blog" },
          { label: "Help", path: "/about" }, //para la seccion de contact
        ]}
      />
      <LandingHeroBanner title="Your Pet Friendly Web" />

      <LandingWhy></LandingWhy>

      <LandingCardsDisplay></LandingCardsDisplay>

      <Footer logo="WAG!" options={navOptions} socialMedia={[]} />
    </div>
  );
}
