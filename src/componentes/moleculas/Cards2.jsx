import Title from "../atomos/Title"
import Imagin from "../atomos/Imagin"
import './Cards2.css'

function Cards2 (props){
    return (
        <div id="cards_final">
            <a href={"#"+props.title}>
                <Imagin imagen={props.imagen}></Imagin>
                <Title title={props.title}></Title>
            </a>
        </div>
    )
}

export default Cards2