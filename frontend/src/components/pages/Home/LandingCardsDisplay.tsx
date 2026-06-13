const background = "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/confetiNaranja_ore6k2.png";

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