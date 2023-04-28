export default function Button(props) {
    console.log(props.children)
    const btnStyle = {
        backgroundColor: props.bgc,
    }
    return (
        <button style={btnStyle}>
            {props.children} 
        </button>
    )
}