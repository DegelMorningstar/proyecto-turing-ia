import styles from '../styles/Styles.module.css'

const Hero = ({title,text,videoUrl}) => {
  return (
    <>
      <div className={styles.herowrapper}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
          <video className={styles.videoBG} src={videoUrl} autoPlay loop muted></video>
          <div className={styles.contentHero}>
            <h1>{title}</h1>
            <h2>{text}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero