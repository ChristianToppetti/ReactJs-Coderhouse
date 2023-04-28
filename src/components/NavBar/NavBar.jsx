import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar(props) {
    let navElements = []

    props.elements.forEach((element, i) => {
        navElements.push(
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