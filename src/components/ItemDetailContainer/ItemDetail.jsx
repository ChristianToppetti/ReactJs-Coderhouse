import Flex from '../Flex/Flex'
import ItemCount from '../ItemCount/ItemCount'
import Button from '../Button/Button'
import '../ItemDetailContainer/itemdetail.css'
import { Link } from 'react-router-dom'

export default function ItemDetail({name, price, imgsource, stock, desc}) {
  return (
    <div className='itemdetail'>
        <Link to={'/'}>
            <Button customclass={"itemdetail_closebtn"}>Cerrar</Button>
        </Link>
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
        <Flex customclass={"fjustify_spacebtwn"}>
            <ItemCount limit={stock} />
            <Button customclass={"cart_btn"}>🛒</Button>
        </Flex>
        <div>{stock} productos disponibles.</div>
    </div>
  )
}
