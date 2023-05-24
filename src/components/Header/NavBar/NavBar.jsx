import "./navbar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

export default function NavBar(props) {
    return (
        <nav className="shadow">
            <ul>
                <li>
                    <Link to={'/'}>INICIO</Link>
                </li>
                <li>
                    <Link to={'/products'}>PRODUCTOS</Link>
                </li>
                <li>
                    <Link to={'/products/vestidos'}>VESTIDOS</Link>
                </li>
                <li>
                    <Link to={'/products/remeras'}>REMERAS</Link>
                </li>
                <li>
                    <Link to={'/products/calzado'}>CALZADO</Link>
                </li>
            </ul>
            { <CartWidget count={props.cartcount} /> }
        </nav>
    )
}