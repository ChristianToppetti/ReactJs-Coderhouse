import Item from '../Item/Item'

export default function ItemList({products}) {
    return (
        <>
            {products.map(product => <Item key={product.id} {...product} />)}
        </>
    )
}
