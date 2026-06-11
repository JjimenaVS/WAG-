import LandingButton from "./LandingButton";



interface LandingCardsProps{
    titles:string[];
    images:string[];
    buttonText:string;
}

export default function LandingCards(props:LandingCardsProps) {

    

    return(
        <div>
            {props.titles.map((title, index) => (
                <h3 key={index} className="">
                    {title}
                </h3>
            ))}


            

        </div>
    )
}