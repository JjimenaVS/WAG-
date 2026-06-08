import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";
import LandingHeroBanner from "./LandingHeroBanner";

interface LandingProps {
    
}

const navOptions = ['Home', 'About', 'Blog', 'Help'];

export default function Landing(props: LandingProps) {
    return (
        <div> 
            <NavHeader  logo="WAG!" options={navOptions}  />
            <LandingHeroBanner title="Your Pet Friendly Web" />
            <Footer logo="WAG!" options={navOptions} socialMedia={[]} />
        </div>
    );
}