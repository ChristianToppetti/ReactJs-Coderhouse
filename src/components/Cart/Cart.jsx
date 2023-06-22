import {useContext, useState} from "react"
import {useNavigate, useLocation} from 'react-router-dom'
import {cartContext} from "../../context/cartContext"
import {createOrder} from "../../services/firebase"
import Flex from "../Flex/Flex"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import CheckoutForm from "./CheckoutForm"
import './cart.css'

export default function Cart() {
    const {cartItemsList, getCartTotalPrice, clearCart, removeProduct} = useContext(cartContext)
    const [showForm, setShowForm] = useState(false)
    
    const cartItems = cartItemsList.map(item => {
        return (
            <Flex key={item.product.id} customclass={"cart_item shadow"}>
                <div className="cart_itemimg">
                    <img style={{borderRadius: "25%", width: "100%"}} src={item.product.imgsource} alt="item" />
                </div>

                <h3 className="cart_itemname">{item.product.name}</h3>

                <div className="cart_itemdetails">
                    <div>PRECIO<br/><strong>${item.product.price}</strong></div>
                    <div>CANTIDAD<br/><strong>{item.q}</strong></div>
                    <div>TOTAL<br/><strong>${(parseFloat(item.product.price) * item.q).toFixed(2)}</strong></div>
                </div>

                <Button customclass={"cart_itemremove"} callback={() => removeProduct(item.product.id)}>🗑️</Button>
            </Flex>
        )
    })
    
    const location = useLocation()
    const currBackground = location.state?.background
    const nav = useNavigate()
    
    const backNav = () => {
        const navPath = currBackground ? -1 : "/products"
        nav(navPath)
    }

    const handleCreateOrder = async (formData) => {
        const order = {
            cart: cartItemsList,
            buyer: {...formData},
            date: new Date(),
            totalprice: getCartTotalPrice(),
        }
        
        try {
            const orderId = await createOrder(order)
            clearCart()
            nav(`/confirmation/${orderId}`)
        }
        catch(error) {
            nav(`/order-error/${error}`)
        }
    }

    return (
        <Modal>  
            <Flex column={true} customclass={"cart_container"}>
                <Button customclass={"cart_button"} callback={() => backNav()}>X</Button>

                <div className="cart_itemscont">
                    {cartItems.length ? cartItems : <h3 className="cart_emptytext">Ningun producto en el carrito...</h3>}
                </div>

                <div className="cart_cartdetails">
                    <Button callback={clearCart}>Vaciar carrito 🗑️</Button>
                    <span>Total carrito: ${getCartTotalPrice()}</span>
                </div>
                
                {showForm ? 
                    <>
                        <Button customclass={"cart_button"} callback={() => setShowForm(false)}>ATRAS</Button>
                        <CheckoutForm disabled={!cartItems.length} createOrder={handleCreateOrder}></CheckoutForm>
                    </> 
                    :
                    <Button disabled={!cartItems.length} customclass={"cart_button"} callback={() => setShowForm(true)}>CONTINUAR CON LA COMPRA</Button>
                }
            </Flex>
        </Modal>  
    )
}
