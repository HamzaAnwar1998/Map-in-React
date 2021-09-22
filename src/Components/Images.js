import React from 'react'
import { IndividualImage } from './IndividualImage';

// recieved images props
export const Images = ({images}) => {
    // getting the data here
    console.log(images);
    // step 3: apply map function on images
    // map function applied and individualImage is callback function
    return images.map((individualImage)=>(
        // this IndividualImage component will be called according to how many objects we have in array
        // step 4: pass individualImage as props to this IndividualImage component 
        <IndividualImage key={individualImage.id} individualImage={individualImage}/>
    ))
}
