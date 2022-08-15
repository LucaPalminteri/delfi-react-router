import Item from "./Item";

const ItemList = ({ListProducts}) => {

  return (
    <section className="item_list">
        {ListProducts.map(product => <Item key={product.id} product={product} />)}
    </section>
  ) 
}
export default ItemList