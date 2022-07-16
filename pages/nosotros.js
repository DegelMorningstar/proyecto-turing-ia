import { useBackground } from '../hooks/useBackground';
import Styles from '../styles/Styles.module.css';
import { Layout } from '../components/Layout';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Picture from '../components/Picture';
import Carousel from '../components/Carousel';
import CardTwo from '../components/CardTwo';
import { methods } from '../__mocks__/metodologias';
import { socios } from '../__mocks__/socios';

const nosotros = () => {
    const page = 'Nosotros';
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
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>¿QUIENES SOMOS?</h1>
                                <h2 className={Styles.textcontent}>Hacemos realidad los proyectos más complejos y relevantes de nuestros clientes creando valor que potencia, desarrollo que perdura y compromiso con la sociedad.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="chairs-g1d01e1620_1920.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Turing-IA, tu mejor opción</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blue section */}
            <div className={Styles.bluesection}>
                <div className='container'>
                    <div className='row text-center pb-4'>
                        <div className='col-xl-6 col-sm-12 pb-4'>
                            <h1>BUSSINES INTELIGENCE</h1>
                            <h2>Ayudamos a la toma de decisiones en todos los niveles de la empresa:</h2>
                            <h1>Comprender mejor los resultados de negocio, anticiparse a ellos, darles forma mediante la identificación de tendencias, modelos estadísticos así como predecir amenazas, oportunidades potenciales, planificar, presupuestar y prever los recursos.</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* ´premios */}
            <div className='container'>
                <div className={Styles.section2}>
                    <div className='row text-start mt-4 mb-4'>
                        <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Nuestros premios</h1>
                        <ul className="list-unstyled">
                            <li >
                                <span className={Styles.trophyText}>Ganador del OPI</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" /></svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Ganador del Parthner boot camp</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" /></svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Ganador del OPI</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" /></svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Ganador del OPI</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" /></svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='row text-end mt-4 mb-4'>
                        <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Nuestros conocimientos</h1>
                        <ul className="list-unstyled">
                            <li >
                                <span className={Styles.trophyText}>Big Data</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Data Mining</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Data to Insight</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Business Intelligence</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Business Analytics</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </li>
                            <li >
                                <span className={Styles.trophyText}>Machine Learning</span>
                                <span className={Styles.trophy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* technologys */}
            <div className={Styles.greysection}>
                <div className={Styles.techcontent}>
                    <div className='row text-center'>
                        <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft} mb-4`}>NUESTRAS METODOLOGÍAS</h1>
                        <h2 className={Styles.textcontent}>Para llevar acabo proyectos, hace falta el uso de estandares que nos facilitan la manera en la que realizamos ciertas tareas, por ello utilizamos las siguientes metodologias.</h2>
                        <Gallery>
                            {
                                methods.map(({ title, text, imageUrl }, i) =>
                                (
                                    <Picture key={i} title={title} text={text} imageUrl={imageUrl} />
                                ))
                            }
                        </Gallery>
                    </div>
                </div>
            </div>
            {/* blue section */}
            <div className={Styles.bluesection}>
                <div className='container pb-4'>
                    <div className='row text-center pb-4'>
                        <div className='col-12'>
                            <h1>Nuestras certificaciones</h1>
                            <h2>Somos una empresa ampliamente comprometida con entregar un mejor servicio</h2>
                            <div className={Styles.blueAccordonationWrapper}>
                                <div className="accordion accordion-flush" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Certificados por el (PMI® e IPMA® )
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='row'>
                                                    <div className='col-xl-6 col-md-12'>
                                                        <div className={Styles.accordText}>
                                                            Profesionales con conocimientos y competencias acreditadas ante organismos nacionales (CONOCER) e internacionales (PMI® e IPMA®). - Aplicación e impacto inmediato en mejores prácticas para administrar proyectos dentro de las organizaciones. - Incremento en la capacidad para realizar más y mejores proyectos. - Líderes de equipos de trabajo altamente orientados a lograr los resultados que contribuyen a los objetivos estratégicos de la organización.
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6 col-md-12'>
                                                        <div className={Styles.accordImgWrapper}>
                                                            <img src="pmi.png" className="img-fluid rounded mx-auto d-block" alt="..." />
                                                            <img src="ipma_logo.jpg" className="img-fluid rounded mx-auto d-block" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Certificados por (Tableau Plataform®)
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='row'>
                                                    <div className='col-xl-6 col-md-12 p-5'>
                                                        <div className={Styles.accordText}>
                                                            Ayudamos en la toma de decisiones en todos los niveles de la empresa, comprender mejor los resultados de negocio, anticiparse a ellos, darles forma mediante la identificación de tendencias, modelos estadísticos, anomalías; analizarlos, comparar los casos “what-if” y predecir las amenazas, oportunidades potenciales, así como planificar, presupuestar y prever los recursos
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6 col-md-12 p-5'>
                                                        <img src="certificado.jpg" className="img-fluid rounded mx-auto d-block" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                SCRUM
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='row'>
                                                    <div className='col-xl-6 col-md-12 p-5'>
                                                        <div className={Styles.accordText}>
                                                            Profesionales con conocimientos y competencias acreditadas De todas las formas que existen para poder desarrollar software, únicamente de manera colaborativa es como se logra. Es por eso que aplicamos la metodología Scrum para llevar más allá tus objetivos
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6 col-md-12 p-5'>
                                                        <img src="scrumn.jfif" className="img-fluid rounded mx-auto d-block" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Data Driven
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='row'>
                                                    <div className='col-xl-6 col-md-12 p-5'>
                                                        <div className={Styles.accordText}>
                                                            Tomamos decisiones estratégicas basadas en la interpretación y el análisis de datos. Es decir, se trata de ver la manera cómo se estructuran y organizan los datos con el fin de aplicarlos a su negocio y mejorar sus estrategias.
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6 col-md-12 p-5'>
                                                        <img src="data-driven.jpg" className="img-fluid rounded mx-auto d-block" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Work */}
            <div className={Styles.sectioncontent} id='our-work'>
                <div className='container'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>CONOCE A NUESTROS SOCIOS DE NEGOCIOS</h1>
                    <Carousel>
                        {
                            socios.map(({ nombre, imgUrl, pageUrl }, i) =>
                            (
                                <CardTwo key={i} nombre={nombre} imgUrl={imgUrl} pageUrl={pageUrl} />
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </Layout>
    )
}

export default nosotros