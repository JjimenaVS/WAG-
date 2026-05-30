import LandingButton from "./LandingButton";

interface LandingProps {
    title: string;
    image: string;
}

export default function LandingHeroBanner(props: LandingProps) {
    return (
        <div className="relative w-full bg-[var(--blue-color)] flex items-center h-64 md:h-80 overflow-visible">
            
            {/* Texto centrado en el 60% izquierdo */}
            <div className="flex flex-col items-center justify-center w-[60%] z-10 px-8">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center leading-tight">
                    Your pet <br /> friendly <br /> web
                </h1>
                <LandingButton text="Log In" type="large" />
            </div>

            {/* Imagen alineada a la derecha, sobresale por arriba */}
            <div className="absolute right-0 bottom-0 w-[45%] h-[120%]">
                <img
                    src={props.image}
                    alt="Hero Image"
                    className="w-full h-full object-contain object-bottom"
                />
            </div>
        </div>
    );
}