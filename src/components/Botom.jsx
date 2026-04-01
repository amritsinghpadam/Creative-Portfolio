import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Botom = () => {
  

    useGSAP(function(){
        gsap.to("#banner img",{
            rotate: 360,
            duration:2,
            repeat: -1

        })
    })


        useGSAP(function(){
        gsap.from("#banner img",{
            opacity:0 ,
            duration:2,
            delay:0,
            y:20,
            
        })
    })



     useGSAP(function(){
        gsap.from("#text",{
            opacity:0 ,
            duration:2,
            delay:0,
            y:20
        })
    })
  
    return (
    <div className='object-cover absolute  bottom-0 mt-20 p-16 flex justify-between   w-full '>
       
     <div>
           <h2 id='text'  className='font-bold text-white font-serif text-2xl '>Aspiring Engineer & Frontend Enthusiast</h2>
        <h2 id='text'  className='font-bold text-white font-serif '>Transforming complex ideas into simple, beautiful code</h2>

     </div>
       
<div className='rounded-full flex gap-5 mt-5'>
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/amrit-singh-b44673320/">
    <img 
      className='rounded-full h-14 w-14 transition-all duration-500 grayscale brightness-0 opacity-100 hover:brightness-150 hover:opacity-50' 
      src="https://logoeps.com/wp-content/uploads/2014/06/49408-linkedin-logo-icon-vector-icon-vector-eps.png" 
      alt="LinkedIn" 
    />
  </a>

  {/* GitHub */}
  <a href="https://github.com/amritsinghpadam?tab=repositories">
    <img 
      className='rounded-full h-14 w-14 transition-all duration-500 grayscale brightness-0 opacity-100 hover:brightness-150 hover:opacity-50' 
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
      alt="GitHub" 
    />
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/amritsinghpadam/">
    <img 
      className='rounded-full h-14 w-14 transition-all duration-500 grayscale brightness-0 opacity-100 hover:brightness-150 hover:opacity-50' 
      src="https://www.pngall.com/wp-content/uploads/15/Instagram-Logo-Black.png" 
      alt="Instagram" 
    />
  </a>
</div>
    </div>
  )
}

export default Botom