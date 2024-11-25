
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function CartWidget({cartCount}) {
  return (
    <Link to="/" className="nav-link" style={{paddingLeft:'10px',color:'orange'}}><FontAwesomeIcon icon={faCartShopping} />
    
    <span className="badge text-bg-secondary" >{cartCount}</span></Link>
  )
}


