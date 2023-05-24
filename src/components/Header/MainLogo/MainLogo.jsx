import { Link } from "react-router-dom"
import "./mainlogo.css"

export default function MainLogo(props) {
    return (
      <Link to={'/'}>
        <div className="mainlogo">
          <h1 className="mainlogo_text">{props.children}</h1>
        </div>
      </Link>
    )
}