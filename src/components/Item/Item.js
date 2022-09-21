import './Item.css'
import { Link} from 'react-router-dom'

const Item = ({id, imagen, nombre, description,precio,stock}) => {
  return (
    <div className="item">
        
        <div>
        <img className="imagen" src={imagen} alt={nombre}/>
        <div className='detalle'>
        <h1>{nombre}</h1>
        <h3>${precio}</h3>
        <h3>stock: {stock}</h3>
        <p className="description">{description}</p>
        
        
        <Link to={`/item/${id}`}>
          <button className='boton-ver'>Ver detalle</button>
        </Link>
        </div>
        
       
        </div>
    </div>
  )
}

export default Item