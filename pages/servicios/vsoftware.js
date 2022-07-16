import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const vsoftware = () => {
    const page = 'Venta de Software';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Venta de Software'}
                text={'Responda preguntas a la velocidad del pensamiento'}
                imageUrl={'/charlesdeluvio-Lks7vei-eAg-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>Venta de software</h1>
                                <h2 className={Styles.textcontent}>Nos dedicamos a la venta de licencias de software, podemos recomendarle los sistemas que de acuerdo a sus necesidades son más adecuados.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className={Styles.imagewrapper}>
                                <img className='img-fluid' src="/softin.png" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default vsoftware