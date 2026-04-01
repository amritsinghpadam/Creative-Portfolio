import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between  w-full object-cover absolute px-10 py-10' >
       <div>
         <img className='h-24 w-24  rounded-full' src="https://thumbs.dreamstime.com/b/letter-logo-design-simple-modern-logo-design-letter-very-simple-black-background-color-183193944.jpg" alt="" />
       </div>
       
       <div >
         <a  href="https://docs.google.com/document/d/1V81H1sNpX24M3ksHbY9Gi7PvP60GNk9NLvqqoT-vD2g/edit?usp=sharing">

       
       <button className=' bg-black text-white hover:bg-zinc-700 rounded-full shadow-lg active:scale-110 shadow-slate-800  border-2 px-6 py-5 mt-6 '>DOWNLOAD CV</button> 
    </a> 
       </div>
     

    </div>
  )
}

export default Header