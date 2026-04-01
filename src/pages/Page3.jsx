import React from 'react'

import video1 from '../components/vivi2.mp4'


import Extra from '../components/Extra'
import Extra3 from '../components/Extra3'


const Page3 = () => {




return (

<div>
     
     
     <Extra/>
     <Extra3/>
     
     
     
      <div className='bg-white h-screen  py-3 w-full flex items-center relative overflow-hidden justify-center'>
    
    
     <div className=' relative bg-[url(https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=)] h-[70vw] w-[80vw] bg-contain bg-center  bg-no-repeat items-center'>
     <div className='wi-full min-h-full overflow-hidden'>

      <video  muted autoplay='true' loop className='h-[41.4%] w-[60.5%] overflow-hidden  object-cover absolute top-[22.8%] left-[20%] ' src={video1} ></video>
     </div>
    </div>
    
    
  
   
  </div>
   
</div>
)}

export default Page3