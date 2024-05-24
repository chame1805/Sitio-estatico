import Cards3 from "../moleculas/Cards3"
import final from "../../data/final"
import './Section4.css'

function Section4(){
    return (
        <div id="login">
{

        final.cont.map(contacs=><Cards3 imag={contacs.imag}></Cards3>)
}
        </div>
    )
}

export default Section4