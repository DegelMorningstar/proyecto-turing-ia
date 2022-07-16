import { useBackground } from '../hooks/useBackground';
import Styles from '../styles/Styles.module.css';
import { Layout } from '../components/Layout';
import Hero from '../components/Hero';
import Link from 'next/link';

const servicios = () => {

    const page = 'Servicios';
    const { background, isLoaded } = useBackground(page);

    return (
        <Layout title={`${page} | Turing IA`}>
            {
                isLoaded && (<Hero
                    title={background.title}
                    text={background.text}
                    videoUrl={background.videoUrl}
                />)
            }
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="cytonn-photography-vWchRczcQwM-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Servicios en Turing-IA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 ms-5 text-start">
                                <h1 className={Styles.title}>LO QUE OFRECEMOS</h1>
                                <h2 className={Styles.textcontent}>Proporcionamos a nuestros clientes una gama de productos y servicios relacionados con el analisis de datos, mediante el uso de tecnologias como Tableau, Salesforce, PMI, Scrum.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.bgsection}>
                <div className='container pt-5'>
                    <div className='row text-center p-3'>
                        <h1>MODELO DE NOGOCIOS</h1>
                        <h2>A que nos dedicamos</h2>
                    </div>
                    <div className='row'>
                        <p className={Styles.bgsectionText}>Nosotros somos expertos creación de proyectos de Big Data, mediante la metodología PMI. A su vez también nos dedicamos al desarrollo de software hecho a la medida utilizando distintas herramientas. Tenemos distintas cursos y capacitaciones para ti y tu empresa. Adicionalmente nos encargamos de vender licenciamiento de software y equipos hardware. Todo en conjunto forma el modelo de negocios de Turing-IA.</p>
                    </div>
                    <div className='row'>
                        <h1>Services</h1>
                        <hr />
                        <div className='col-md-12 col-xl-6'>
                            <h3>Project -PMI</h3>
                            <ul className='list-unstyled'>
                                <li><h5>BI y BA</h5></li>
                                <li><h5>Big Data</h5></li>
                                <li><h5>Tableau BluePrint</h5></li>
                            </ul>
                        </div>
                        <div className='col-md-12 col-xl-6'>
                            <h3>Deployment</h3>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul className='list-unstyled'>
                                        <li><h5>Linux</h5></li>
                                        <li><h5>Windows</h5></li>
                                        <li><h5>Project -SCRUM</h5></li>
                                        <li><h5>Desarrollos WEB</h5></li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul className='list-unstyled'>
                                        <li><h5>Desarrollo de APP</h5></li>
                                        <li><h5>Modelado de datos</h5></li>
                                        <li><h5>SQL Server</h5></li>
                                        <li><h5>MySQL</h5></li>
                                        <li><h5>Oracle</h5></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-4 col-md-12'>
                            <h1>Training</h1>
                            <ul className='list-unstyled'>
                                <li><h5>Tableau</h5></li>
                                <li><h5>Altery</h5></li>
                                <li><h5>R Studio</h5></li>
                                <li><h5>Data Mining Weka</h5></li>
                                <li><h5>Insight</h5></li>
                                <li><h5>BI</h5></li>
                            </ul>
                        </div>
                        <div className='col-xl-4 col-md-12'>
                            <h1>Software</h1>
                            <ul className='list-unstyled'>
                                <li><h5>Tableau</h5></li>
                                <li><h5>Altery</h5></li>
                                <li><h5>Auth0</h5></li>
                                <li><h5>Otros</h5></li>
                                <li><h5>Redhat</h5></li>
                                <li><h5>Vmware</h5></li>
                                <li><h5>arspersky</h5></li>
                            </ul>
                        </div>
                        <div className='col-xl-4 col-md-12'>
                            <h1>Hardware</h1>
                            <ul className='list-unstyled'>
                                <li><h5>HP</h5></li>
                                <li><h5>Dell</h5></li>
                                <li><h5>IBM</h5></li>
                                <li><h5>Otros</h5></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>SERVICIOS QUE OFRECEMOS</h1>
                    <p className={`${Styles.textcontent} ${Styles.animated} ${Styles.slideInRight}`}>Tenemos la siguiente gama de servicios en los cuales somos expertos, estamos capacitados para brindarte la mejor experiencia y bienestar para ti y tu empresa.</p>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Implementación de Proyectos (Business Analyst)</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                    Nuestra metodología de servicios se encuentra orientada en los estándares del Project Management Institute (PMI)
                                    ® e
                                    International Project Management Association (IPMA). Esto nos permite contar con las competencias para coordinar
                                    equipos
                                    de trabajo en el inicio, planeación, construcción, monitoreo y control de las actividades y recursos
                                    involucrados en un
                                    proyecto a partir de los objetivos y requerimientos de nuestro cliente.
                                </h4>
                                <Link href='/servicios/ba'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="adeolu-eletu-unRkg2jH1j0-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Implementación de Proyectos (Business Analyst)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Desarrollo de Aplicaciones</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="william-hook-9e9PD9blAto-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Desarrollo de Aplicaciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 ms-5 text-start">
                                <h4 className={Styles.accordText}>
                                    En un mundo moderno, con la cantidad de problemas y su complejidad cada vez es mayor, el desarrollo de aplicaciones, una herramienta para obtener soluciones precisas, dándole tareas repetitivas a la computadora y logrando así la "automatización" de procesos que todavía requieren la intervención de las personas en tareas repetitivas.
                                </h4>
                                <Link href='/servicios/dsoftware'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Workshop (Blue Print)</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                    Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluida la identificación de casos de uso comercial inmediatos, la definición de roles, responsabilidades, el establecimiento de medidas para evaluar el éxito y el impacto.
                                </h4>
                                <Link href='/servicios/workshop'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="jason-goodman-Oalh2MojUuk-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Workshop (Blue Print)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Capacitación</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="sincerely-media-dGxOgeXAXm8-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Capacitación</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 ms-5 text-start">
                                <h4 className={Styles.accordText}>
                                    Nuestra gama de cursos de Tableau incluye:
                                </h4>
                                <ul className='list-unstyled'>
                                    <li><h5>Tableau Prep Tableau</h5></li>
                                    <li><h5>Desktop Visual Analytics</h5></li>
                                    <li><h5>Tableau Server</h5></li>
                                </ul>
                                <hr />
                                <h4 className={Styles.accordText}>Adicionalmente ofrecemos cursos sobre:</h4>
                                <ul className='list-unstyled'>
                                    <li><h5>Business Intelligence.</h5></li>
                                    <li><h5>Data Mining.</h5></li>
                                    <li><h5>Big Data</h5></li>
                                    <li><h5>Data to Insight</h5></li>
                                </ul>
                                <Link href='/servicios/capacitacion'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Venta de Software</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                    Nos dedicamos a la venta de licencias de software, podemos recomendarle los sistemas que de acuerdo a sus necesidades son más adecuados.
                                </h4>
                                <Link href='/servicios/vsoftware'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Venta de Software</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Venta de hardware</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="alexandre-debieve-FO7JIlwjOtU-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Venta de hardware</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 ms-5 text-start">
                                <h4 className={Styles.accordText}>
                                    Trabajamos con los mejores proveedores de México y tenemos la capacidad de cubrir cualquier necesidad que tenga de hardware. Redes, computadoras, impresoras y accesorios.
                                </h4>
                                <Link href='/servicios/hardware'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Balanced Scorecard</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                    Somos especialistas en el balanced scorecard. Dejanos tener un cumplimiento sostenido de la Misión y Visión de tu empresa a través de la gestión de cuatro perspectivas.
                                </h4>
                                <Link href='/servicios/scorecard'>
                                    <a className="btn btn-outline-primary">VER MAS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="balanced scorecard.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Balanced Scorecard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 mb-5'></div>

            </div>
        </Layout>
    )
}

export default servicios