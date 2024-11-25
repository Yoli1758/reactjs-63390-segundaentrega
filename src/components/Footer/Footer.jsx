import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram ,faCcVisa,faCcMastercard, faBitcoin} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'


function Footer() {
    return (

        <div className='footer'>
            <div className='contenedorfooter'>
                <div className='footerlinks'>
                    <div className='footerlinksdiv'>

                        <Link ><img src="/img/yesport_logo.jpg" /></Link>
                        <p>Lider Deportivo - Todo lo que buscas en un solo lugar</p>
                    </div>

                    <div className='footerlinksdiv'>
                        <h4>Recursos</h4>
                        <Link className='link'><p>Comentarios</p></Link>
                        <Link className='link'><p>Buscar una tienda</p></Link>
                        <Link className='link'><p>Hazte miembro</p></Link>
                    </div>
                    <div className='footerlinksdiv'>
                        <h4>Ayuda</h4>
                        <Link className='link'><p>Cambios</p></Link>
                        <Link className='link'><p>Envios y entregas</p></Link>
                        <Link className='link'><p>Libro de quejas online</p></Link>
                    </div>
                    <div className='footerlinksdiv'>
                        <h4>Acerca de Yesport</h4>
                        <Link className='link'><p>Propósito</p></Link>
                        <Link className='link'><p>Empleo</p></Link>

                    </div>
                    <div className='footerlinksdiv'>
                        <h4>Novedades</h4>
                        <Link className='link'><p>Promociones</p></Link>
                        <Link className='link'><p>Guia de talles</p></Link>
                        <Link className='link'><p>Tarjeta de regalo</p></Link>
                    </div>
                    <div className='footerlinksdiv'>
                        <h4>Redes Sociales </h4>
                        <div className='socialmedia'>
                            <p><FontAwesomeIcon icon={faFacebook} className='socialmediaimg' /></p>
                            <p><FontAwesomeIcon icon={faTwitter} className='socialmediaimg' /></p>
                            <p><FontAwesomeIcon icon={faLinkedin} className='socialmediaimg' /></p>
                            <p><FontAwesomeIcon icon={faInstagram} className='socialmediaimg' /></p>
                        </div>
                        <h4>Metodos de Pago</h4>
                        <div className='socialmedia'>
                            <p><FontAwesomeIcon icon={faCcVisa} className='socialmediaimg'/></p>
                            <p><FontAwesomeIcon icon={faCcMastercard} className='socialmediaimg'/></p>
                            <p><FontAwesomeIcon icon={faBitcoin} className='socialmediaimg' /></p>
                            <p><FontAwesomeIcon icon={faMoneyBillTransfer} className='socialmediaimg' /></p>
                        </div>
                    </div>
                </div>
               
                <hr className='hrfooter' />
                <div className='footerbelow'>
                    <div className='footercopyright'>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Argentina </p>
                        <p> @{new Date().getFullYear()} Yesport, All right reserved.</p>
                    </div>
                    <div className='footerbelowlinks'>
                        <Link className='link'><p>Terminos y condiciones</p></Link>
                        <Link className='link'><p>Política de privacidad</p></Link>
                        <Link className='link'><p>Devoluciones</p></Link>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Footer