import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const ba = () => {
    const page = 'BA';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Bussines Analyst'}
                text={'Ayuda a las personas a ver y comprender los datos'}
                imageUrl={'/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>Proyectos Big Data con Tableau</h1>
                                <h2 className={Styles.textcontent}>Nuestra gestión de proyectos se basa en la metodología del Project Management Institute (PMI) a través de la cual fomentamos las buenas practicas para llevar a cabo la ejecución de procesos y determinar las áreas de conocimiento requeridas.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="/chairs-g1d01e1620_1920.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>Proyectos Big Data con Tableau</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ba