import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getProduct} from "../../services/firebase"
import ItemDetail from "./ItemDetail"
import Flex from "../Flex/Flex"
import Loader from "../Loader/Loader"
import Modal from "../Modal/Modal"

export default function ItemDetailContainer() {
    const {itemId} = useParams()
    const [product, setProduct] = useState(null)
    
    const errorStyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: ".5rem"
    }

    useEffect(() => {
        getProduct(itemId).then(prod => setProduct(prod))
    }, [itemId])

    if(!product) {
        return <Loader />
    }

    return (
        <Flex customclass={"fjustify_center"}>
            {product !== -1 ? 
                <ItemDetail {...product} /> 
            : 
                <Modal><h3 style={errorStyle}>ERROR: Producto no encontrado</h3></Modal>}
        </Flex>
    )
}
