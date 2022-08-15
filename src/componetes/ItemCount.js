import { useState } from "react"

const ItemCount = () => {

  const[contador, setContador] = useState(0)

  const incrementador = () => {
    setContador(contador + 1);
  }

  const decrementador = () => {
    setContador(contador - 1);
  }

  return (
    <>
      <div>
        <button onClick={decrementador}>-</button>
        <p>{contador}</p>
        <button onClick={incrementador}>+</button>
      </div>
      <button>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;