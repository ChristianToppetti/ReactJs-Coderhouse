import Item from '../Item/Item'

export default function ItemList({productslist}) {
    return (
        <>
            {productslist.map((product) => (
                    <Item key={product.id} {...product} />
                ))}
        </>
    )
}
