import "./mainlogo.css"

export default function MainLogo(props) {
    return (
        <a href="../index.html" className="mainlogo">
          <h1 className="mainlogo__text">{props.children}</h1>
        </a>
    )
}