import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './item.css'

export default function Item(props) {
    const {name, imgsource, id} = props

    return (
        <>
            <div className='item'>
                <h3 className="item_nametag">{name}</h3>

                <div>
                    <img className="item_img" src={imgsource} alt="item" />
                </div>
                
                <div>
                    <Link to={`/products/${id}`}>
                        <Button customclass={"item_button"}>Ver detalles.</Button> 
                    </Link>
                </div>
            </div>
        </>
    )
}
