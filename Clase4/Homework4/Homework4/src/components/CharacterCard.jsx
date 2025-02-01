import React from "react";
import Titulo from "./Titlle";
import Image from "./Image";
import Details from "./Details";


function CharacterCard(props) {
    console.log(props)
    return(
        <div>
            
            <Titulo nombre={props.nombre}/>
            
            <Image img={props.imagen} />
            
            <Details 
              genero={props.genero} 
              estado={props.estado} 
            />
            
        </div>
    );

}

export default CharacterCard;