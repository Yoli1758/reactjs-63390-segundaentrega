import './Checkout.css'

export default function Checkout() {


  return (



 
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light ">
      <div className="row bg-white shadow rounded p-4 w-100" style={{ maxWidth: "900px", marginTop: "25px" }}>

        <div className="col-12 col-lg-6 border-end">
          <div className="mb-1 ">
            <label htmlFor="email" className="form-label"><strong>Contacto</strong></label>
            <input type="email" id="email" className="form-control change-placeholder" placeholder="Correo electrónico" />
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input change-placeholder" id="notif" />
            <label htmlFor="notif" className="form-check-label" style={{ fontSize: "12px", fontWeight: "700", color: "blue" }}>Envíame novedades de mi pedido por WhatsApp </label>
          </div>
          <h3 className="mt-3 mb-3" style={{ fontSize: "24px" }}>Dirección</h3>

          <div className="mb-2">
            <select className="form-select" >
              <option>País/Región</option>
              <option>Argentina</option>
              <option>Venezuela</option>
              <option>Uruguay</option>
            </select>
          </div>
          <div className="row mb-2">
            <div className="col"><input type="text" className="form-control change-placeholder" placeholder="Nombres" /></div>
            <div className="col"><input type="text" className="form-control change-placeholder" placeholder="Apellidos" /></div>
          </div>
          <div className="mb-2">
            <input type="text" id="dni" className="form-control change-placeholder" placeholder="DNI/CUIT" /></div>
          <div className="mb-2">
            <input type="text" id="street" className="form-control change-placeholder" placeholder="Calle y altura" /></div>
          <div className="mb-2">
          <input type="text"  id="floor" className="form-control change-placeholder" placeholder="Casa, Piso, dpto,etc (Opcional)"/></div>

          <div className="row mb-2">
            <div className="col-4"><input type="text" className="form-control change-placeholder"  placeholder="CP" /></div>
            <div className="col-4"><input type="text" className="form-control change-placeholder"  placeholder="Localidad" /></div>
            <div className="col-4">
            <select className="form-select" >
            <option>Provincia</option>
              <option>Buenos Aires</option>
              <option>Entre Ríos</option>
              </select>
            </div>
          </div>
          <div className="mb-3"> <input  type="tel"  id="phone" className="form-control" placeholder="Número de telefono" /></div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input change-placeholder" id="saveInfo" />
            <label htmlFor="saveInfo" className="form-check-label" style={{fontSize:"12px"}}>
              Guardar mi información y consultar más rápidamente la próxima vez
            </label>
          </div>
        </div>

        {/* Resumen de la compra */}
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Resumen de la compra</h2>
    

          <div className="mb-3">
         
            <div className="input-group">
                <input  type="text"   id="discount"   className="form-control"   placeholder="Código de descuento"    />
              <button className="btn btn-primary">Aplicar</button>
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-1"><strong>Subtotal:</strong> $XX.XX</p>
            <p className="mb-1"><strong>Métodos de envío:</strong> $XX.XX</p>
          </div>

          <div className="fs-5 fw-bold">
            <p><strong>Total:</strong> $XX.XX</p>
          </div>
        </div>
      </div>
    </div>







  )
}

