import logo from '../logobeauty.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom' 

const NavBar = () => {
    
    return(
        <div className='navbar-container'>
            <div>
            <Link to="/">
                <img width={'90px'}src={logo} alt="logo" className='logo'/>
            </Link>
            </div>
            <div className='listaNav'>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/">INICIO</NavLink>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/reservas/spa">SPA</NavLink>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/reservas/peluqueria">PELUQUERÍA</NavLink>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/contacto">CONTACTO</NavLink>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/carrito"><CartWidget/></NavLink>
            </div>
            <div>
                <button>REGISTRARSE</button>
            </div>
        </div>
    )
}

export default NavBar;