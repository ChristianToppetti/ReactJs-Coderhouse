import {Link, useLocation} from 'react-router-dom'
import Button from '../Button/Button'
import './item.css'

export default function Item({id, name, imgsource}) {
    const location = useLocation()

    return (
        <div className='item'>
            <h3 className="item_nametag">{name}</h3>

            <div>
                <img className="item_img" src={imgsource} alt="item" />
            </div>
            
            <div>
                <Link to={`/detail/${id}`} state={{background: location}}>
                    <Button customclass={"item_button"}>Ver detalles.</Button> 
                </Link>
            </div>
        </div>
    )
}
