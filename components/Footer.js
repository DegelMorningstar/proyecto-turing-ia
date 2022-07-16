import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="footer-06">
                <div className="container">
                    <div className="row d-flex align-items-center text-center mb-5">
                        <div className="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
                            <div className="w-100">
                                <span className="subheading">Inscríbete a nuestro</span>
                                <h3 className="heading-section">Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-md-8 py-4 py-md-5 aside-stretch d-flex align-items-center">
                            <div className="w-100">
                                <div className="suscribewrapper">
                                    <form action="#" className="subscribe-form w-100">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
                                            <button type="submit" className="form-control submit"><span>Submit</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-3 col-lg-6 order-md-last">
                            <div className="row justify-content-end">
                                <div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
                                    <h2 className="footer-heading"><a href="#" className="logo">Turing Inteligencia Artificial</a></h2>
                                    <p className="copyright">
                                        <Link href="/privacidad">
                                            <a>Aviso de privacidad</a>
                                        </Link>
                                    </p>
                                    <p>© Copyright Turing Inteligencia Artificial. Derechos reservados</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-6">
                            <div className="row">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Nuestros servicios</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link  href="/servicios/ba">
                                                <a className="py-1 d-block">Implementación de Proyectos (Business Analyst)</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios/workshop">
                                            <a href="#" className="py-1 d-block">Workshop (Blue Print)</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios/capacitacion">
                                            <a href="#" className="py-1 d-block">Capacitación</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios/vsoftware">
                                            <a href="#" className="py-1 d-block">Venta de Software</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios/hardware">
                                            <a href="#" className="py-1 d-block">Venta de Hardware</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios/dsoftware">
                                            <a href="#" className="py-1 d-block">Desarrollo de Aplicaciones</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios/scorecard">
                                            <a href="#" className="py-1 d-block">Balanced Scorecard</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Mapa de sitio</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link href="/">
                                                <a className="py-1 d-block">Inicio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/nosotros">
                                                <a className="py-1 d-block">Nosotros</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link  href="/servicios">
                                                <a className="py-1 d-block">Servicios</a>
                                            </Link>
                                        </li>
                                        <li><a href="/" className="py-1 d-block">Tableau</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Encuentranos en</h2>
                                    <ul className="list-unstyled">
                                        <li>Av. Insurgentes 601
                                            Col. Napoles, Benito Juarez
                                            Ciudad de México, México</li>
                                        <li><a href="#" className="py-1 d-block">Telefono de contacto:
                                            <p>+52 (722) 936-96-65</p></a></li>
                                        <li><a href="#" className="py-1 d-block">Correo electrónico:
                                            <p>contacto@turing-ia.com</p></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer