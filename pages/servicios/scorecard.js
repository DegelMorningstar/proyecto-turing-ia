import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const scorecard = () => {
    const page = 'Balanced Scorecard';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Balanced Scorecard'}
                text={'Creamos un Balanced Scorecard para medir y mejorar tus procesos'}
                imageUrl={'/cytonn-photography-vWchRczcQwM-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>Balance Scorecard</h1>
                                <h2 className={Styles.textcontent}>Utilizamos la planificación estratégica para alinearse a la visión y estrategia de tu organización, con el propósito de tener una visión integral del negocio y controlar el desempeño de tu empresa a través de mediciones de rendimiento.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="/balance-scorecard.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default scorecard