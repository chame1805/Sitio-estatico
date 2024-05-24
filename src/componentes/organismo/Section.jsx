import Cards from "../moleculas/Cards"
import myqsl from "../../data/mysql"

import './Section.css'

function Section (){
    return (
        <div id="cards_section">
{

        myqsl.contacs.map(contrac =><Cards image={contrac.image} text={contrac.text}></Cards>)
}
        </div>
        )

    }
export default Section