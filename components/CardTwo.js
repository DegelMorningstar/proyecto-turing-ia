import Link from 'next/link'
import React from 'react'
import CardStyle from '../styles/Card.module.css'

const CardTwo = ({ nombre = 'Tableau', imgUrl = 'tableau-partner.png', pageUrl = 'https://www.tableau.com/es-mx' }) => {

    return (
        <>
            <div style={{width: '13rem', height: '50%', cursor: 'pointer'}}>
                <Link href={pageUrl}>
                    <img src={imgUrl} className="img-fluid" alt={nombre}/>
                </Link>
            </div>
        </>
    )
}

export default CardTwo