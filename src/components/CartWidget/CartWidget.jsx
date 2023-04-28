import "./cartwidget.css"

export default function CartWidget(props) {
    return (
        <div className="cartwidget">
            🛒 
            <span className="cartwidget__count">
                {props.count}
            </span>
        </div>
    )
}