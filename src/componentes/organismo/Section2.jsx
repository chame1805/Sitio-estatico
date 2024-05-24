import Cards1 from "../moleculas/Cards1";
import cards from "../../data/cards";
import './Section2.css'


function Section2 (){
    return (
        <div id="section_cards"> 
{
        cards.section.map(sections =><Cards1 imagen={sections.imagen} texto={sections.texto} titulo={sections.title}></Cards1>)
}
        </div>
    )
}

export default Section2