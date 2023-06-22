import { useState } from "react"
import Button from "../Button/Button"
import "./checkoutform.css"

export default function CheckoutForm({disabled, createOrder}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repemail: "",
    phone: ""
  })

  const [mismatchStyle, setMismatchStyle] = useState({})

  const inputChange = (e) => {
    const newFormData = {...formData}
    const key = e.target.name
    newFormData[key] = e.target.value
    setFormData(newFormData)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(formData.repemail && formData.email !== formData.repemail) {
      setMismatchStyle({border: "1px solid red"})
      return
    }

    setMismatchStyle({})
    createOrder(formData)
  }
  
  return (
    <form onSubmit={onSubmit} className="cart_form" method="POST">
        <h2>Completa tu compra</h2>
        <input name="name" onChange={inputChange} type="text" required={true} placeholder=" Nombre" />
        <input name="email" onChange={inputChange} type="email" required={true} placeholder=" Correo" />
        <input name="repemail" onChange={inputChange} style={mismatchStyle} type="email" required={true} placeholder=" Repetir correo" />
        <input name="phone" onChange={inputChange} type="number" required={true} placeholder=" Teléfono" />
        <Button disabled={disabled} customclass={"cart_button order shadow"} >CREAR ORDEN DE COMPRA</Button>
    </form>
  )
}
