import "./cartwidget.css"

export default function CartWidget(props) {
    return (
        <div className="cartwidget">
            🛒 
            <span className="cartwidget_count">
                {props.count}
            </span>
        </div>
    )
}