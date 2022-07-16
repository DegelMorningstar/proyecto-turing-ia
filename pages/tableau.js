import { useBackground } from '../hooks/useBackground';
import Styles from '../styles/Styles.module.css';
import { Layout } from '../components/Layout';
import Hero from '../components/Hero';

const tableau = () => {
    const page = 'Tableau';
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
                                <h1 className={Styles.title}>¿QUE ES TABLEAU?</h1>
                                <h2 className={Styles.textcontent}>Es un software de analisis de datos con una excelente capa de visualización y presentación, considerado por muchos como uno de los mejores programas para la presentación visual de datos y con muy alta clasificación en la facilidad de uso . Especialmente utilizada para el Business Intelligence, simplifica los datos para presentarlos en un formato compresible e intuitivo.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="partnertab.png" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>El análisis que los usuarios adoran usar</p>
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
                        </div>
                        <div className='col-xl-6 col-sm-12 pb-4'>
                            <h1>Conectores de datos nativos de Tableau</h1>
                            <h2>Ofrece a los clientes la mayor variedad de opciones para implementar y conectar los datos de manera segura.</h2>
                            <h1>Conéctese a todos sus datos, sin importar dónde estén ubicados. Tableau ofrece conectores nativos desarrollados y optimizados para numerosas bases de datos y archivos, desde hojas de cálculo y archivos PDF hasta big data, cubos y bases de datos relacionales, ya sea en las instalaciones físicas o en la nube. Estos también incluyen los datos de aplicaciones o en la web.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row text-center mt-2 mb-2'>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="excel.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="sqlmicrsoft2x.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="amazon_athena.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="postgre.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="snowflake.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="big_query.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="sheets.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="sap_hana.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="hive.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="vertica.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="amazon_athena.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="presto.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="salesforce.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="netezza.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="splunk.png" alt="..." />
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className={Styles.smallimage}>
                                <img className='img-fluid' src="ga.png" alt="..." />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={Styles.bgsection2}>
                <div className={`container pt-5 ${Styles.bgblue}`}>
                    <div className='row text-center p-3'>
                        <h2>TABLEAU SERVER DEPLOYMENT</h2>
                        <h1>Tableau es la plataforma de análisis empresarial de cualquier organización moderna.</h1>
                        <h3>Es crucial que los arquitectos empresariales y los líderes de TI comprendan cómo Tableau Server puede ir adaptándose al número creciente de datos, contenido y usuarios. Además, cada vez es más evidente que la única forma de poder satisfacer las necesidades de análisis actuales y futuras de las empresas es mediante la implementación e integración de plataformas de TI empresariales diversas y heterogéneas.</h3>
                        <div style={{ width: '30%', margin: '10px auto' }}>
                            <img className='img-fluid' src="Tableau-diagram.jpg" alt="Tableau-diagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row text-center'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU PRODUCTS</h1>
                    <p className={`${Styles.textcontent} ${Styles.animated} ${Styles.slideInRight}`}>Tenemos una gran gama de soluciones para llevara al máximo nivel tu compañia</p>
                </div>
                <div className='row mb-1'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU PREP</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                    Cambia la forma en que se realiza la preparación de datos tradicional en una organización. Al proporcionar una forma visual y directa de combinar, dar forma y limpiar datos. Asimismo, automatiza los flujos de preparación de datos. Así podrá completar los análisis y obtener la información mucho más rápido.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="prep.png" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>TABLEAU PRE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.greysection}>
                <div className='container'>
                    <div className='row mb-4'>
                        <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU DESKTOP</h1>
                        <hr />
                        <div className='col-md-12 col-sm-12 col-xl-6'>
                            <div className={Styles.sectioncontent}>
                                <div className="p-4 ms-5 mt-2 text-start">
                                    <h4 className={Styles.accordText}>
                                    Deje atrás a los creadores de gráficos. Los análisis visuales en vivo impulsan la exploración de datos ilimitada.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-sm-12 col-xl-6'>
                            <div className={Styles.sectioncontent}>
                                <div className={Styles.imagewrapper}>
                                    <img className='img-fluid' src="getinsightsfast.gif" alt="..." />
                                    <div className={Styles.imagetext}>
                                        <p>TABLEAU DESKTOP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU CLOUD</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                Es su plataforma de análisis completamente alojada en la nube. Publique Dashboards y comparta sus descubrimientos con cualquier persona.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="tabon.png" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>TABLEAU CLOUD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.greysection}>
                <div className='container'>
                    <div className='row mb-4'>
                        <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU SERVER</h1>
                        <hr />
                        <div className='col-md-12 col-sm-12 col-xl-6'>
                            <div className={Styles.sectioncontent}>
                                <div className="p-4 ms-5 mt-2 text-start">
                                    <h4 className={Styles.accordText}>
                                    Difunde el valor de los datos en toda tu organización con Tableau Server. Otórgale poder a tu empresa dándole la libertad de explorar los datos en un entorno de confianza, sin limitarlos a preguntas predefinidas, asistentes o tipos de gráficos inflexibles.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-sm-12 col-xl-6'>
                            <div className={Styles.sectioncontent}>
                                <div className={Styles.imagewrapper}>
                                    <img className='img-fluid' src="servert.png" alt="..." />
                                    <div className={Styles.imagetext}>
                                        <p>TABLEAU SERVER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU DATA MANAGEMENT</h1>
                    <hr />
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 ms-5 mt-2 text-start">
                                <h4 className={Styles.accordText}>
                                Te ayuda a administrar mejor los datos dentro de tu entorno de análisis, asegurando que siempre se usen datos confiables y actualizados para tomar decisiones.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="dataman.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>TABLEAU DATA MANAGEMENT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.greysection}>
                <div className='container'>
                    <div className='row mb-4'>
                        <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TABLEAU SERVER MANAGEMENT</h1>
                        <hr />
                        <div className='col-md-12 col-sm-12 col-xl-6'>
                            <div className={Styles.sectioncontent}>
                                <div className="p-4 ms-5 mt-2 text-start">
                                    <h4 className={Styles.accordText}>
                                    Tableau Server Management Add-on facilita la ejecución de implementaciones de Tableau Server grandes y de misión crítica.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-sm-12 col-xl-6'>
                            <div className={Styles.sectioncontent}>
                                <div className={Styles.imagewrapper}>
                                    <img className='img-fluid' src="serverma.png" alt="..." />
                                    <div className={Styles.imagetext}>
                                        <p>TABLEAU SERVER MANAGEMENT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default tableau