import Section from "../componentes/organismo/Section"
import Section2 from "../componentes/organismo/Section2"
import Section3 from "../componentes/organismo/Section3"
import Section4 from "../componentes/organismo/Section4"
import './Home.css'

function Home (){
    return (

        <div id="cards_home">
            {
             <>
             <div id="rit_cards">

                <Section></Section>
             </div>
                <div id="final_card">
                <Section3></Section3>
                </div>
                <div id="cards2">
                <Section2></Section2>
                </div>


                <div id="finally_cards">

                <Section4></Section4>
                </div>
            </>
            }
        </div>
    )
}

export default Home