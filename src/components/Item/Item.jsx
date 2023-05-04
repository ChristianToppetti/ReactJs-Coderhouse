import ItemCount from '../ItemCount/ItemCount'
import './item.css'

export default function Item({imgfolder, price}) {
    const itemImgPath = `./src/assets/${imgfolder}/img0.webp`

    return (
        <div className='item'>
            <h3 className="item__nametag">NAME</h3>

            <div>
                <img className="item__img" src={itemImgPath} alt="item" />
            </div>

            <div className="item__pricetag">
                {`${price}$`}
            </div>
            <ItemCount />
        </div>
    )
}
