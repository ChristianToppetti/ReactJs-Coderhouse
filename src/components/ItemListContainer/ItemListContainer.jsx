import "./itemlistcontainer.css"

export default function ItemListContainer(props) {
    return (
        <div className="itemcard">
            <h2>{props.greeting}</h2>
        </div>
    )
}