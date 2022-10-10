import logo from '../logobeauty.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom' 
import { useContext } from 'react';
import { CartContex } from '../../context/CartContex';

const NavBar = () => {

    const {productCartList} = useContext(CartContex)
    
    return(
        <div className='navbar-container'>
            <div>
            <Link to="/">
                <img width={'90px'}src={logo} alt="logo" className='logo'/>
            </Link>
            </div>
            <div className='listaNav'>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/">INICIO</NavLink>
                <div className='dropdown'>
                    <h4 className='dropbtn'>SERVICIOS</h4>
                    <div className='dropdown-content'>
                        <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/reservas/spa">SPA</NavLink>
                        <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/reservas/peluqueria">PELUQUERÍA</NavLink>    
                    </div>
                </div>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/contacto">CONTACTO</NavLink>
                
            </div>
            <div className='navBar-linkCarrito' >
            <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/carrito">{productCartList.length > 0? <CartWidget/> : null }</NavLink>
            {productCartList.length < 1 ? <div className="carritoInactivo" ><CartWidget/></div> : null }
            </div>
        </div>
    )
}

export default NavBar;