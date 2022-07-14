import { useBackground } from '../hooks/useBackground';
import { Layout } from '../components/Layout';
import Hero from '../components/Hero';

const servicios = () => {

    const page = 'Servicios';
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
            <div>
                <h1>Servicios</h1>
            </div>
        </Layout>
  )
}

export default servicios