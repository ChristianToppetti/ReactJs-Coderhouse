import {useContext} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {cartContext} from '../../context/cartContext'
import Flex from '../Flex/Flex'
import ItemCount from '../ItemCount/ItemCount'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import '../ItemDetailContainer/itemdetail.css'

export default function ItemDetail(props) {
    const {id, name, price, imgsource, stock, desc} = props
    const {addProduct, productInCart} = useContext(cartContext)

    const location = useLocation()
    const currBackground = location.state?.background
    const nav = useNavigate()

    const backNav = () => {
        const navPath = currBackground ? -1 : "/products"
        nav(navPath)
    }

    let count = 1
    const updateCount = (newCount) => count = newCount

    const addToCart = () => {
        let product = props
        let q = count

        addProduct(product, q)
    }

    return (
        <Modal>       
            <div className='itemdetail'>
                <Button customclass={"itemdetail_closebtn"} callback={backNav}>Cerrar</Button>
                
                <h3 className="itemdetail_nametag">{name}</h3>

                <div>
                    <img className="itemdetail_img" src={imgsource} alt="item" />
                </div>

                <div className="itemdetail_pricetag">
                    {`${price}$`}
                </div>

                <div>
                    {desc}
                </div>

                <Flex customclass={"detailwrapper fjustify_spacebtwn"}>
                    <ItemCount limit={stock} callback={updateCount} />
                    {productInCart(id) ? 
                        <Link to={"/cart"} state={{background: currBackground}} className='linktocart'>Mostrar en carrito</Link>
                    :
                        <Button disabled={stock ? false : true} callback={addToCart} >🛒</Button>
                    }
                </Flex>
                <div>{stock} productos disponibles.</div>
            </div>
        </Modal>
    )
}
