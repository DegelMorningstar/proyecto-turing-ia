import CardStyle from '../styles/Card.module.css'

const Card = ({title='Title',text='text content',imageUrl='img_1.jpg'}) => {
  return (
    <>
        <div className={CardStyle.cardWrapper}>
            <div className={CardStyle.card}>
                <div className={`${CardStyle.face} ${CardStyle.face1}`}>
                    <div className={CardStyle.content}>
                        <div className={CardStyle.icon}>
                            <img className='img-fluid' src={imageUrl} alt=".." />
                        </div>
                    </div>
                </div>
                <div className={`${CardStyle.face} ${CardStyle.face2}`}>
                    <div className={CardStyle.content}>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">
                            <h3>
                                {title}
                            </h3>
                            <p>{text}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card