
import {Link} from 'react-router-dom'

export default function Cart() {
  return (
    <div className='contenedor'>
      
     <ul>
      <li>Producto 1</li>
      <li>Producto 2</li>
      <li>Producto 3</li>
      <li>Producto 4</li>
     </ul>

<Link to="/checkout">Comprar</Link>

    </div>
  )
}
