import {useContext } from "react"
import {Link, useLocation} from "react-router-dom"
import {cartContext } from "../../../context/cartContext"
import "./cartwidget.css"

export default function CartWidget() {
    const {getItemsCount} = useContext(cartContext)
    const cartCount = getItemsCount()
    const location = useLocation()

    return (
        <Link to={'/cart'} state={{background: location}}>
            <div className="cartwidget">
                🛒 
                {cartCount !== 0 && <span className="cartwidget_count"> {cartCount} </span>}
            </div>
        </Link>
    )
}