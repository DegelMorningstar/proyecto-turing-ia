import Styles from '../../styles/Styles.module.css';
import { Layout } from '../../components/Layout';
import HeroStatic from '../../components/HeroStatic';

const hardware = () => {
    const page = 'Venta de Hardware';
    return (
        <Layout title={`${page} | Turing IA`}>
            <HeroStatic
                title={'Venta de Hardware'}
                text={'La Exigencia que tenemos en ofrecer siempre productos de calidad'}
                imageUrl={'/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg'}
            />
            <div className='container'>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xl-6'>
                        <div className={Styles.sectioncontent}>
                            <div className="p-4 mt-2 text-start">
                                <h1 className={Styles.title}>Venta de hardware</h1>
                                <h2 className={Styles.textcontent}>Trabajamos con los mejores proveedores de México y tenemos la capacidad de cubrir cualquier necesidad que tenga de hardware. Redes, computadoras, impresoras y accesorios. son más adecuados.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default hardware