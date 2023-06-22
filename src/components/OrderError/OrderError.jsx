import {useParams} from 'react-router-dom'

export default function OrderError() {
    const {errorId} = useParams()

    const contStyle = {
        backgroundColor: "white",
        padding: "1rem",
        color: "black",
        borderRadius: ".3rem",
        border: "1px solid black",
        alignSelf: "center"
    }

    return (
        <div style={contStyle}>
            <h2 style={{paddingBottom:"1rem"}}>Hubo un problema!</h2>
            <p>Error: <strong style={{textDecoration:"underline"}}>{errorId}</strong></p>
        </div>
    )
}
