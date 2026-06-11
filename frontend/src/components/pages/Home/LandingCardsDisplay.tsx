import background from "../../../assets/images/confetiNaranja.png";

export default function LandingCardsDisplay() {

    return(
        <div className="bg-[var(--primary-color)]">
            <img src={background}
            alt="Background of orange confeti"
            className="h-full w-full object-cover"
            />
        </div>
    )

}