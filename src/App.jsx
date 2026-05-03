import { useState } from 'react'
import Props from './Props'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


import './App.css'
import Add from './Props'

function App() {
  // let name='krushna';
  // let age=20;
  // let sirname='deore';

  let UserData={
    name:'krushna',
    age:30,
    email:'krushnadeore@text.com'
  }

  let Employe={
    name:'apurva',
    age:30,
    email:'apurvadeore@Text.com'

  }

  const [name,setName]=useState("krushna")

  return (
    <>
  
    <h1>This is Name:{name}</h1>

    <button onClick={()=>setName('deore')}> click</button>
    <Add user={UserData}/>
    
    <hr></hr>
    <Add user={Employe}/>
     
    </>
  )
}

export default App
