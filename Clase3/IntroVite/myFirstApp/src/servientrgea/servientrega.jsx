import React from 'react'
import Familiar from '../familiar/familiar';

  const Servientrega = (props) => {
  console.log(props, 'props familiar');
  return (
    <div>
      Componente Servientrega
      El paquete que se recibe es
      <h2>{props.encomienda}</h2>
    
      ----------------------------------------

      <Familiar regalo = {props.encomienda} />

    </div>
  )
}

export default Servientrega