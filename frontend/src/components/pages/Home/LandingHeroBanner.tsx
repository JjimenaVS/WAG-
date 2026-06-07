import LandingButton from "./LandingButton";
import fluffyDog from "../../../assets/images/flufflyDog.png";
import orangeCat from "../../../assets/images/orangeCat.png";

interface LandingHeroBannerProps {
  title: string;
}

export default function LandingHeroBanner({ title }: LandingHeroBannerProps) {
  return (
    <div className="relative w-full bg-(--blue-color) flex items-center h-80 md:h-96 overflow-hidden">

      {/* Semicírculo naranja */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[180%] aspect-square rounded-full bg-(--orange-color) translate-x-[40%]" />

      {/* Grid 3 columnas */}
      <div className="relative z-10 w-full h-full grid grid-cols-3">

        {/* Columna 1 — vacía */}
        <div />

        {/* Columna 2 — texto centrado */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center leading-tight">
            {title}
          </h1>
          <LandingButton text="Log in" type="large" />
        </div>

        {/* Columna 3 — animales */}
        <div className="absolute bottom-0 right-0 w-1/3 h-[120%] flex items-end justify-center">
          <img
            src={orangeCat}
            alt="Gato naranja"
            className="z-20 h-[90%] w-auto object-contain object-bottom"
          />
          <img
            src={fluffyDog}
            alt="Perro"
            className="z-10 h-[105%] w-auto object-contain object-bottom -scale-x-100 -ml-12"
          />
        </div>

      </div>
    </div>
  );
}