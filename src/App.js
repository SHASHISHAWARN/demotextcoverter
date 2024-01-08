import './App.css';
import Text from './Text';
import { useState } from 'react';
import Navbar from './Navbar'


function App() {
  const [mode,setMode]=useState({backgroundColor:'white',color:'black'})
  const [name,setName]=useState('Enable Darkmode')
  function changeColor()
  {
      if(mode['backgroundColor']==='white')
      {
        setMode({backgroundColor:'black',color:'white'})
        document.body.style.backgroundColor='#03021e'
        document.body.style.color='white'
        setName('Disable darkmode')
      }
      else{
        setMode({backgroundColor:'white',color:'black'})
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        setName('Enable darkmode')
      }
  }
  return (
    <>
      <Navbar color={mode}a={changeColor} name={name}/>
      <Text color={mode}/>
    </>

  );
}

export default App;
