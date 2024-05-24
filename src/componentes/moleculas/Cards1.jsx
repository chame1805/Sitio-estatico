import Imagen from "../atomos/Imagen"
import Texto from "../atomos/Texto"
import Titulo from "../atomos/Titulo"
import './Cards1.css'


function Cards1 (props){
    return (
            <div id={props.titulo}>
        <div id="cards">
                <Imagen imagen = {props.imagen}></Imagen>
                <Texto texto={props.texto}></Texto>
                <Titulo titulo={props.titulo}></Titulo>
            </div>
        </div>
        
    )
}

export default Cards1