import React, { useEffect, useState } from 'react'
import "./itemlistcontainer.css"
import Flex from "../Flex/Flex"
import ItemList from "./ItemList"

export default function ItemListContainer({greeting, type}) {
    const [productsList, setProductList] = useState([])

    useEffect(() => {
        async function getProducts() {
            const response = await fetch("../src/assets/products_data.json")
            let products = await response.json()
            
            type && products && (products = products.filter(product => product.type === type))

            //Mock delay:
            setTimeout(() => {
                setProductList(products)
            }, 2000)
        }

        getProducts()
    }, [type])

    return (
        <div className="itemcard">
            <h2>{greeting}</h2>
            <Flex column={false} wrap={true} customclass={"itemwrapper"}>
                <ItemList productslist={productsList} />
            </Flex>
        </div>
    )
}