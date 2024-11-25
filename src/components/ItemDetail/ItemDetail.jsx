import { Link } from "react-router-dom";
import { useState} from "react";
import './ItemDetail.css'
import swal from 'sweetalert'
import { Bounce, toast, ToastContainer, Zoom } from 'react-toastify'

export default function ItemDetail({ name, description, price, stock, talles, imgDetail, initialValue = 1 }) {


    const [activeImg, setActiveImg] = useState(imgDetail[0].img)
    const [amount, setAmount] = useState(initialValue)
    const [selecTalle, setSelecTalle] = useState("")




    const decrementar = () => {
        if (amount > 1) {
            setAmount(amount => amount - 1)
        }

    }
    const incrementar = () => {
        if (stock > amount) {
            setAmount(amount => amount + 1)
        }
    }

    const selectButton = (id) => {
        setSelecTalle(id)
    }

    const addCart = () => {

        const mensaje = amount > 1 ? `Se agregaron ${amount} productos al Carrito` : `Producto agregado al carrito`

        if (selecTalle) {
            swal({
                title: `${mensaje}  `,
                icon: "success",
                timer: 2000,
            })
        } else {
            toast.info("Seleccione una Talla", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                theme: 'dark',
                transition: Bounce,
            })
        }
    }
    return (
        <div className="details">
            <div className="big-img">
                <img src={activeImg} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <span>${price}</span>
                </div>
                <div className="tallesdetail">
                    <h2>Seleccionar Talla</h2>
                    <div className="contenedortallas">
                        {talles.map(medida => (
                            <button key={medida.id}
                                onClick={() => selectButton(medida.id)}
                                className={selecTalle === medida.id ? "active" : ""}
                            >{medida.value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="thumbdet">
                    {imgDetail.map(imagen => (
                        <img key={imagen.id} src={imagen.img} alt={name}
                            onMouseEnter={() => setActiveImg(imagen.img)}
                            className={activeImg === imagen.img ? "active" : ""}
                        />
                    ))}
                </div>
                <div className="contcantcart">
                    <div className="botonincrementos">
                        <button onClick={decrementar}>-</button>
                        <span>{amount}</span>
                        <button onClick={incrementar}>+</button>
                    </div>
                    <button className="cart" onClick={addCart}>Agregar al Carrito</button>
                    <Link to="/cart" className="cartfc">Finalizar Compra</Link>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

