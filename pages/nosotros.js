import { useBackground } from '../hooks/useBackground';
import { Layout } from '../components/Layout';
import Hero from '../components/Hero';

const nosotros = () => {
    const page = 'Nosotros';
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
                <h1>Nosotros</h1>
            </div>
        </Layout>
    )
}

export default nosotros