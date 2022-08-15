import { useEffect, useState } from "react";
import { productos } from "../productos/productos";
import { customFetch } from "../CustomFetch";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [Product, SetProduct] = useState({})
    const [Loading, SetLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        customFetch(productos)
        .then(data => {
            console.log(id);
            SetLoading(true)
            SetProduct(data.find(item => item.id==id))
        })
      }, [id]) 

        return (
            <>
            {
                Loading?

                <itemDetail Product={Product} />
                :
                <div>
                    
                </div>
            }
            </>
        )
    }

export default ItemDetailContainer