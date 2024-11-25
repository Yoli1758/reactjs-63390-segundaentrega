import { useEffect, useState } from "react"
import { getProductsByID } from "../../asynmook.js"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

export default function ItemDetailContainer() {

  const [product, setProduct] = useState(null)

  const { productId } = useParams()

  
  useEffect(() => {
    getProductsByID(productId)
      .then((result) => {
        setProduct(result)
      })
  }, [productId])

 
  return (
    <div className="contenedor">
      <h2 className="titulo">Detalle del Producto</h2>
      <hr style={{color:"#333"}}/>
      {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
  )
}

