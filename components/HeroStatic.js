import Styles from '../styles/Styles.module.css'

const HeroStatic = ({ title, text, imageUrl }) => {
    const customstyle = {
        content: "",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        opacity: '0.9',
    }
    return (
        <>
            <div className={Styles.heroStatic}>
                <div style={customstyle}>
                <div className={Styles.heroSC}>
                    <h1>{title}</h1>
                    <h2>{text}</h2>
                </div>
                </div>
            </div>
        </>
    )
}

export default HeroStatic