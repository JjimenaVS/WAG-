import background from "../../../assets/images/confetiNaranja.png";

export default function LandingCardsDisplay() {
    return(
        <div 
            className="min-h-[500px] w-full"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
        </div>
    )
}