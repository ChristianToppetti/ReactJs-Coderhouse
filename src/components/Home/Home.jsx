import {useEffect, useState} from "react"
import {getProductsArr} from "../../services/firebase"
import ItemList from "../ItemListContainer/ItemList"
import Flex from "../Flex/Flex"
import Loader from "../Loader/Loader"
import "./home.css"

export default function Home() {
  const [prodList, setProdList] = useState(null)

  //Productos de presentacion para la entrega
  const productsIds = [
    "Qggpa4ubsDxb1K03p1Fm",
    "dKiUHkx08p2Kjc8Jzzah",
    "XwetSWzoinGvcJ3CRsdT"
  ]

  useEffect(() => {
    getProductsArr().then(products => {
      const selectedProducts = []
      for(let id of productsIds) {
        selectedProducts.push(products.find((prod) => prod.id === id))
      }
      setProdList(selectedProducts)
    }) 
  }, [])

  if(!prodList) {
    return <Loader />
  }

  return (
    <div className="card">
      <h2 style={{color:"grey"}}>Proyecto Final: Christian Toppetti</h2>

      <div >
        <h3 style={{padding:"1rem"}}>Productos favoritos</h3>
          <Flex column={false} wrap={true} customclass={"productwrapper itemwrapper"}>
              <ItemList products={prodList} />
          </Flex>
      </div>
    </div>
  )
}
