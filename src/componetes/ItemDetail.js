const ItemDetail = ({ product }) => {
    return (
        <article className="item">
            <img src={product.img} className="item_img" />
            <div className="item_title">{product.producto}</div>
            <p className="item_price">Precio: ${product.price}</p>
        </article>
    )
}

export default ItemDetail