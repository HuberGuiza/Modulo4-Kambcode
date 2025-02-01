import React from 'react'

const Details = (props) => {
    console.log(props)
  return (
    <div>
    <p>
      <b>Genero:</b> {props.genero}
    </p>
    <p>
      <b>Estado:</b> {props.estado}
      
    </p>
</div>
  )
}

export default Details