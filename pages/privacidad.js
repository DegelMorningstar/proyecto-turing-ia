import { Layout } from '../components/Layout';
import Styles from '../styles/Styles.module.css';
const privacidad = () => {

    const page = 'Aviso de Privacidad';
    return (
        <>
            <Layout title={`${page} | Turing IA`}>
                <div className='container mt-4 mb-4'>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Aviso de privacidad</h1>
                        <div className={`${Styles.aText} mt-4`}>
                            <p className='mt-4'>El presente aviso de privacidad se establece en cumplimiento de lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
                            <p className='mt-4'><b>Turing Inteligencia Artificial</b>, con domicilio en <b>Av. Insurgentes Sur 601 , Nápoles, Benito Juárez, 03810 Ciudad de México, CDMX, México</b>, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección. Su información personal será utilizada para proveer los servicios y productos que ha solicitado, informarle sobre cambios en los mismos y evaluar la calidad del servicio que le brindamos.</p>
                            <p className='mt-4'>Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente; cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley. Recabamos sus datos personales de forma directa cuando usted mismo nos los proporciona por diversos medios, como cuando nos contacta o nos da información con objeto de que le prestemos un servicio. Los datos que obtenemos por este medio pueden ser, entre otros: Su nombre, correo electrónico (email), país y ciudad, páginas visitadas dentro de nuestro sitio, información para mejorar su experiencia en nuestro sitio como resolución de pantalla, explorador y tipo de sistema operativo utilizado. Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado.</p>
                        </div>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Aviso de Privacidad Detallado</h1>
                        <div className={`${Styles.aText} mt-4`}>
                            <p className='mt-4'>En este Aviso de Privacidad se explica nuestra política respecto de la recolección, uso, divulgación y transmisión de los datos de usuarios por parte de <b>Turing Inteligencia Artificial</b> . La presente política se podrá modificar a medida que actualizamos y ampliamos nuestros servicios. Por lo tanto, se recomienda consultarla periódicamente. Si accede a nuestro sitio web o de otro modo utiliza nuestro servicio, significa que presta su consentimiento a nuestras prácticas sobre información.</p>
                            <p className='mt-4'>Importante: el presente Aviso de privacidad incluye hipervínculos a los que se puede acceder únicamente a través de nuestro sitio web, de modo que tendrá que visitar el sitio web para consultar los términos adicionales a los que se accede a través de los hipervínculos.</p>
                            <p className='mt-4'>La presente política se podrá modificar a medida que actualizamos y ampliamos nuestros servicios. Consulte regularmente si existe alguna actualización a esta política. Usted acuerda que su aceptación de los Términos de Uso y el Aviso de privacidad posterior a su consentimiento original, así como el uso del sitio web de <b>Turing Inteligencia Artificial</b> o el uso continuo de nuestro servicio después de publicar un cambio a esta política implica que acepta dichos cambios y se obliga a respetarlos. Podrá acceder a la última versión de esta Aviso de privacidad visitando nuestro sitio web y haciendo clic en “Aviso de privacidad” al pie de las páginas del sitio web de <b>http://www.turing-ia.com</b></p>
                            <p className='mt-4'>Para garantizar el correcto resguardo de sus datos personales y para dar pleno cumplimiento a las obligaciones que la LFPDPPP establece en la materia, se le informa que <b>Turing Inteligencia Artificial</b> tiene implementadas las medidas de seguridad administrativas, técnicas y físicas necesarias y suficientes para evitar su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. Los Datos Personales que han proporcionados serán conservados por un periodo de 1 año, excepto la que fiscalmente debe considerarse por 5 años, en medios físicos y electrónicos, y posteriormente descartados para evitar un tratamiento indebido de los mismos.</p>
                            <p className='mt-4'>En ningún caso <b>Turing Inteligencia Artificial</b> transferirá los datos personales de sus clientes a un tercero, sin el consentimiento previo de los titulares.</p>
                        </div>
                    <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>PROCEDIMIENTO PARA HACER VALER LOS DERECHOS ARCO. -</h1>
                    <div className={`${Styles.aText} mt-4`}>
                        <p className='mt-4'>Usted tiene derecho de acceder a sus datos personales que poseemos y a los detalles del tratamiento de estos, así como a rectificarlos en caso de ser inexactos o incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señalados en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya finalizado la relación contractual o de servicio, o bien, oponerse al tratamiento de los mismos para fines específicos</p>
                        <p className='mt-4'>Los mecanismos que se han implementado para el ejercicio de dichos derechos, los cuales se conocen como derechos Arco mismos que se refieren a la rectificación, cancelación y oposición del Titular respecto al tratamiento de sus datos personales;</p>
                        <hr/>
                        1) El procedimiento inicia con la presentación de la solicitud respectiva a los derechos Arco, a través del correo electrónico contacto@turing-ia.com.
                        <hr/>
                        2) Su solicitud deberá contener la siguiente información: Nombre del titular de los datos personales. Domicilio o cualquier otro medio de contacto. Documentos que acrediten su personalidad e identidad. La descripción clara y precisa de los datos personales. Cualquier otro documento que facilite la localización de los datos.
                        <hr/>
                        3) El plazo para atender su solicitud es de: 15 días hábiles. La última versión del presente Aviso de privacidad prevalecerá sobre todas las versiones anteriores.
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default privacidad