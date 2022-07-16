import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const capacitacion = () => {
    const page = 'Capacitación';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Capacitación'}
                text={'Transferimos no solo conocimiento en Tableau, si no un gran expertise en la industria del Businnes analitics, Big Data, Data mining, Data to Insight'}
                imageUrl={'/kenny-eliason-1-aA2Fadydc-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>LO QUE OFRECEMOS</h1>
                                <h2 className={Styles.textcontent}>Tenemos una gran variedad de cursos.</h2>
                                <ul class="list-unstyled">
                                    <li><h3>Tableau Prep</h3></li>
                                    <li><h3>Tableau Desktop</h3></li>
                                    <li><h3>Visual Analytics</h3></li>
                                    <li><h3>Tableau Server</h3></li>
                                </ul>
                                <h2 className={Styles.textcontent}>Adicionalmente ofrecemos cursos sobre: Business Intelligence, Data Mining, Big Data, Data to Insight.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="/work.jpg" alt="..." />
                                <div className={Styles.imagetext}>
                                    <p>LO QUE OFRECEMOS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default capacitacion