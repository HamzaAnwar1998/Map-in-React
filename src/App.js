import {useState} from 'react'
import { Images } from './Components/Images'
import img1 from './Images/1.PNG'
import img2 from './Images/2.PNG'
import img3 from './Images/3.PNG'
import img4 from './Images/4.PNG'

function App() {

  // step 1: create a state of images
  // state of images. It is an array of object
  const [images]=useState([
    {id: 1, image: img1},
    {id: 2, image: img2},
    {id: 3, image: img3},
    {id: 4, image: img4},
  ])

  // getting the data here
  console.log(images);

  return (
    <div className='main-container'>
      {/* step 2: pass the state of images as props to a component */}
      {/* images state passed as props to Images component  */}
      <Images images={images}/>
    </div>
  );
}

export default App;
