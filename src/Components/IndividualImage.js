import React from 'react'

export const IndividualImage = ({individualImage}) => {
    return (
        <div className='img'>
            <img src={individualImage.image}/>
        </div>
    )
}
