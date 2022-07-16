import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const workshop = () => {
    const page = 'Workshop';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Workshop'}
                text={'Análisis de datos'}
                imageUrl={'/green-chameleon-s9CC2SKySJM-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>Data Driven Metodology</h1>
                                <h2 className={Styles.textcontent}>Para garantizar el éxito con su inversión en análisis, su organización necesita una visión claramente definida para la implementación. Los aportes de las personas de toda la organización son cruciales para comprender los objetivos a corto y largo plazo para promover la toma de decisiones basada en datos. Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluida la identificación de casos de uso comercial inmediatos, la definición de roles y responsabilidades y el establecimiento de una cadencia para evaluar las medidas de éxito y el impacto.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="/work.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Data Driven Metodology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default workshop