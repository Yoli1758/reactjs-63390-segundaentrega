import { Link } from "react-router-dom";
import './Item.css'

export default function Item({ name, imgs, price, description, id, stock, newCollection }) {

    const imageProduct = stock < 5 ? `${imgs.imgSoldOut}` : `${imgs.imgProduct}`
    const precioProduct = price < 400 && stock > 5 ? true : false
    const newCollec = newCollection && stock > 5




    return (
        <>
            <div className="tarjetaproducto">
                <section className="imgproducto" >
                    {newCollec && <span className="productonuevo"><img style={{ width: "5%", height: "5%" }} src={imgs.imgStar} />Nuevo</span>}
                    <img src={imageProduct} alt={name} />
                </section>
                <div className="cardcontent">
                    <h2>{name}</h2>
                    <p>
                        {precioProduct && <span style={{ color: "green", fontWeight: 600 }}>30% Descuento </span>}
                        ${price}
                    </p>
                    <p>{description}</p>
                </div>
                <Link to={`/producto/detail/${id}`} className="btn btn-primary">ver detalles</Link>

            </div>

        </>

    )
}

