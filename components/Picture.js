const Picture = ({ title, text, imageUrl }) => {
    return (
        <>
            <div className="gallery_product col-sm-3 col-xs-6">
                <img className="img-responsive" alt="..." src={imageUrl} />
                <div className='img-info'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Picture