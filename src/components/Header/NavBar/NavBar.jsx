import "./navbar.css"
import CartWidget from "./CartWidget"
import { NavLink} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="shadow">
            <ul>
                <li>
                    <NavLink to={'/'} >INICIO</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'}>PRODUCTOS</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/vestidos'}>VESTIDOS</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/remeras'}>REMERAS</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/calzado'}>CALZADO</NavLink>
                </li>
            </ul>
            { <CartWidget /> }
        </nav>
    )
}