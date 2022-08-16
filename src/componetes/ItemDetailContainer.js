import { useEffect, useState } from "react";
import { productos } from "../productos/productos";
import { customFetch } from "../CustomFetch";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [Loading, SetLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        customFetch(productos)
        .then(data => {
            SetLoading(true)
        })
      }, [id]) 

        return (
            <>
            {
                Loading ?

                <ItemDetail product={productos[id-1]} />
                :
                <div>
                    
                </div>
            }
            </>
        )
    }

export default ItemDetailContainer