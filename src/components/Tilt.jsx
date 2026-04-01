
import { useGSAP } from '@gsap/react'
import Spline from '@splinetool/react-spline'
import gsap from 'gsap'
import { useRef, useState } from 'react'




const Tilt = () => {
    
    const [VALX, setVALX] = useState(0)
     const [VALY, setVALY] = useState(0)
    
    const tilttext = useRef(null)

    
  const moving = (e)=>{
     setVALX((e.clientX- tilttext.current.getBoundingClientRect().x - tilttext.current.getBoundingClientRect().width/2))

     setVALY((e.clientY- tilttext.current.getBoundingClientRect().y - tilttext.current.getBoundingClientRect().height/2))
    
    
    
 }


 useGSAP(function(){
    gsap.to(tilttext.current,{
        transform :`rotateX(${VALY/70}deg) rotateY(${VALX/70}deg) `,
        duration:0.3,
    
 
    })
 },[VALX,VALY])



  


 

  return (

    
    
    
    <div onMouseMove={(e)=>{
        moving(e)
    }}  id='mainop' className='absolute object-cover mt-60 px-10 py-8  '>
       
    
       
       
       
       <div ref={tilttext}  id='tilting'>
         <h1 className='px-4 text-8xl font-bold main12 text-white'>I AM  </h1>
        <span className='px-4 text-8xl font-bold main12 text-black'>FRONT-END</span> 
        <h1 className='px-4 text-8xl font-bold ma text-white'>DEVELOPER</h1>
       </div>
        
       
       
       
       <div  className='absolute object-cover -top-24 -right-full px-10 w-[700px] h-[600px] overflow-hidden '> 
           <Spline className='h-full w-full scale-[1.3] translate-x-[20%] origin-center' scene="https://prod.spline.design/eUjiNZUBiKxPJg8r/scene.splinecode" />
       </div>
    
    
    </div>
    
  )
}

export default Tilt
