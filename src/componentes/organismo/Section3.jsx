import Cards2 from "../moleculas/Cards2";
import pers from "../../data/pers";
import './Section3.css'


function Section3 (){
    return (
        <div id="final_box">
            {

                pers.section.map(sections=><Cards2 imagen={sections.imagen} title={sections.title}></Cards2>)
            }
        </div>
    )
}

export default Section3 