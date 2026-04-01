import React from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import gsap from 'gsap'

import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'


const App = () => {
 

 

  const mover1 = (e)=> {  

      gsap.to("#cursor",{
      x:e.clientX,
      y:e.clientY,
      stagger:0.02,
      ease:"power2.out",
      duration:0.06,
      overwrite:"auto"
  })
}
  
  
  
  
  return (
   
   
   <div onMouseMove={(e)=>{ mover1(e)}} 
   className='relative overflow-hidden'> 
        <Header /> 
       <Page1/>
       <Page2/>
       <Page3/>
       <Page4/>
       <Page5/>
   

      <div className='rounded-full bg-white w-4 h-4 cursor fixed pointer-events-none z-50  opacity-80' id='cursor'></div>
      <div className='rounded-full  bg-white w-3 h-3 cursor fixed pointer-events-none z-50  opacity-80' id='cursor'></div>
      <div className='rounded-full  bg-white w-2 h-2 cursor fixed pointer-events-none z-50  opacity-80' id='cursor'></div>
      <div className='rounded-full  bg-white w-2 h-2 cursor fixed pointer-events-none z-50  opacity-80' id='cursor'></div>
       

    </div>
  )
}

export default App