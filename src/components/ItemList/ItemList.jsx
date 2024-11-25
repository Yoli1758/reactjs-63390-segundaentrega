import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({products}) {
  return (
    <div className="containerItemList">
       
       {products.map(product=><Item key={product.id} {...product}/>)}
        
        </div>
  )
}

