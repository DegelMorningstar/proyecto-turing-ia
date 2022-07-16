import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const dsoftware = () => {
    const page = 'Desarrollo de software';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Desarrollo de software'}
                text={'Desarrollo web y móvil a la medida de tu negocio'}
                imageUrl={'/hack-capital-uv5_bsypFUM-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>DESARROLLO DE SOFTWARE</h1>
                                <h2 className={Styles.textcontent}>Somos especialistas en desarrollo de software.
                                    Contamos con las mejores metodologías para llevar a cabo tu proyecto</h2>
                                <h1 className={Styles.title}>SCRUM</h1>
                                <h2 className={Styles.textcontent}>De todas las formas que existen para poder desarrollar software, únicamente de manera colaborativa es como se logra. Es por eso que aplicamos la metodología Scrum para llevar más allá tus objetivos.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="/danial-igdery-FCHlYvR5gJI-unsplash.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>DESARROLLO DE SOFTWARE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default dsoftware