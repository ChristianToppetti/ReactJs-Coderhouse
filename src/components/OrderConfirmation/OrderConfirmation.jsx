import {useParams} from 'react-router-dom'

export default function OrderConfirmation() {
    const orderId = useParams().orderId

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
            <h2 style={{paddingBottom:"1rem"}}>Gracias por tu compra!</h2>
            <p>Comprobante de compra: <strong style={{textDecoration:"underline"}}>{orderId}</strong></p>
        </div>
    )
}
