import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar(props) {
    let navElements = []

    props.elements.forEach((element, i) => {
        navElements.push(
            // Warning: Each child in a list should have a unique "key" prop
            <li key={i}>
                <a href="#">{element}</a>
            </li>
        )
    })

    return (
        <nav className="shadow">
            <ul>
                {navElements}
            </ul>
            <CartWidget count={props.cartcount} />
        </nav>
    )
}