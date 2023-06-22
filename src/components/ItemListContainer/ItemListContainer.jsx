import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getProductsArr, getCategory} from "../../services/firebase"
import Flex from "../Flex/Flex"
import ItemList from "./ItemList"
import Loader from '../Loader/Loader'
import "./itemlistcontainer.css"

export default function ItemListContainer() {
    const [productsList, setProductList] = useState(null)
    const {catId} = useParams()
    const getFunc = catId ? getCategory : getProductsArr

    useEffect(() => {
        getFunc(catId).then(products => setProductList(products)) 
    }, [catId])

    if(!productsList || productsList.lenght < 1) {
        return <Loader />
    }
    console.log("itemlist cont ", productsList)
    return (
        <div className="card">
            <Flex column={false} wrap={true} customclass={"itemwrapper"}>
                <ItemList products={productsList} />
            </Flex>
        </div>
    )
}