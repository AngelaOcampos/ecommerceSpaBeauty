import './Item.css'

const Item = ({id, imagen, nombre, description,precio,stock}) => {
  return (
    <div className="item">
        
        <div>
        <img className="imagen" src={imagen} alt={nombre}/>
        <p>{id}</p>
        <h1 className='name'>{nombre}</h1>
        <p className="description">{description}</p>
        <p className='precio' >{precio}</p>
        <p>{stock}</p>
       
        </div>
    </div>
  )
}

export default Item