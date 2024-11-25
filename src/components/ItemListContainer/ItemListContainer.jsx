import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asynmook'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {} from './ItemListContainer.css'

export default function ItemListContainer() {

    const [products, setProdcts] = useState([])
    const { categoryId } = useParams()


    useEffect(() => {

      const asyncFunction = categoryId ? getProductsByCategory :getProducts

      asyncFunction(categoryId)
      .then(data=>setProdcts(data))
   }, [categoryId])

    
    return (
        <div className='contenedor'>
            <h2 className='titulo'>{categoryId ? `${categoryId}`: `Todos los Productos`}</h2>
            <hr style={{color:"black"}}/>
            <ItemList products={products}/>
        </div>

    )
}
