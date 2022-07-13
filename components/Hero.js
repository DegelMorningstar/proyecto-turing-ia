import styles from '../styles/Styles.module.css'

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <video className={styles.videoBG} src="heroBG.mp4" autoPlay loop muted></video>
        <div className={styles.contentHero}>
          <h1>Welcome to Slalom</h1>
          <h2>We are building better tomorrows</h2>
        </div>
      </div>
    </>
  )
}

export default Hero