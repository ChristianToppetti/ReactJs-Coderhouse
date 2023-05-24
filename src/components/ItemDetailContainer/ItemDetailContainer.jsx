import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Flex from "../Flex/Flex"

export default function ItemDetailContainer() {
    const {itemId} = useParams()
    const [productsList, setProductList] = useState([])

    useEffect(() => {
        async function getProducts() {
            const response = await fetch("../src/assets/products_data.json")
            const products = await response.json()

            //Mock delay:
            setTimeout(() => {
                setProductList(products)
            }, 500)
        }

        getProducts()
    }, [])

    let product = productsList.find(product => product.id === itemId)

    return (
        <Flex customclass={"fjustify_center"}>
            <ItemDetail {...product} />
        </Flex>
    )
}
