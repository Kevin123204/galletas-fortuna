
import { useState } from 'react';
import './App.css'
import ShowPhrase from './componets/ShowPhrase';
import ShowButton from './componets/ShowButton';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json'


function App() {

  const quote = randomArr(arr);
  const [randomPhrase, setrandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr); 
const [image, setImage] = useState(photo)


 const appStyle = {
  backgroundImage:`url(../fortuna-1/fondo${image}.jpg)`,
  
 }
  return (
   <div className='app' style={appStyle}>
    <h1 className='app__title'>GALLETAS DE LA FORTUNA</h1>
<ShowPhrase
randomPhrase={randomPhrase} 
/>
<ShowButton
setrandomPhrase = {setrandomPhrase}
setImage = {setImage}
/>
   </div>
  )
}

export default App
