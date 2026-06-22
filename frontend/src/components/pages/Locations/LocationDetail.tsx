import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";
import "./locations.css";

const navOptions = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Help", path: "/about" },
];

const footerOptions = ["Home", "About", "Blog", "Help"];

export default function LocationDetail() {
  return (
    <main className="location-page">
      <div className="location-container">
        <NavHeader logo="WAG!" options={navOptions} />

        <section className="location-empty-section">
          {/* contenido de detalle de ubicación que hago luego */}
        </section>

        <Footer
          logo="WAG!"
          options={footerOptions}
          socialMedia={["Instagram", "Facebook"]}
        />
      </div>
    </main>
  );
}