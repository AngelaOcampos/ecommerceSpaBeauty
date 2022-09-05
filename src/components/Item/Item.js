

const Item = ({id, imagen, nombre, description,precio,stock}) => {
  return (
    <div>
        <img src={imagen} alt={nombre}/>
        <h1>{nombre}</h1>
        <p>{description}</p>
        <p>{precio}</p>
    </div>
  )
}

export default Item