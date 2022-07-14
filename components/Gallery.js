const Gallery = ({children}) => {
    return (
        <>
            <div>
                <section className="portfolio" id="portfolio">
                    <div className="container-fluid">
                        <div className="row">
                            {children}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Gallery