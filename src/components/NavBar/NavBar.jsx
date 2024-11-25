import { Link, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

export default function NavBar() {

    const location = useLocation();
    const isActive = (path) => location.pathname === path


    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img style={{ width: "50px" }} src="img/yesport_logo.jpg" alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/") ? "active-link" : ""}`}
                                to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/productos") ? "active-link" : ""}`} to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/productos/category/remeras") ? "active-link" : ""}`} to="/productos/category/remeras">Remeras</Link>
                        </li>


                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/productos/category/calzas") ? "active-link" : ""}`} to="/productos/category/calzas">Calzas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/productos/category/abrigos") ? "active-link" : ""}`} to="/productos/category/abrigos">Abrigos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/productos/category/banador") ? "active-link" : ""}`} to="/productos/category/banador">Trajes de Baño</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/contacto") ? "active-link" : ""}`} to="/contacto">Contacto</Link>
                        </li>

                    </ul>

                </div>
                <form className="d-flex" role="Buscar">
                    <input className="form-control md" type="Buscar" placeholder="Buscar..." aria-label="Buscar" />
                    <button className="btn btn-outline-info " type="submit">Buscar</button>
                </form>
                <CartWidget cartCount={5} />
            </div>
        </nav>
    )
}

