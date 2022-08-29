import logo from '../logobeauty.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    
    return(
        <div className='navbar-container'>
            <div>
                <img width={'90px'}src={logo} alt="logo"/>
               
            </div>
            <div>
                <ul>
                    <li><a href='#'>INICIO</a></li>
                    <li><a href='#'>SERVICIOS</a></li>
                    <li><a href='#'>CONTACTO</a></li>
                    <li><a href='#'></a><CartWidget/></li>

                </ul>
            </div>
            <div>
                <button>REGISTRARSE</button>
            </div>
        </div>
    )
}

export default NavBar;