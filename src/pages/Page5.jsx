import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import video2 from '../components/vivi4.mp4';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Page5 = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  const [status, setStatus] = useState('idle');

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0.1, 
      scale: 0.8, 
      filter: "blur(4px)",
      stagger: { each: 0.06, from: "center" },
      duration: 0.4, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "none none none play",
        scrub: 1,
      }
    });

    return () => split.revert();
  }, { scope: containerRef }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_thiy4ys',
      'template_dxa387l',
      formRef.current,
      'wo494vPiFI0ds6H78'
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch((err) => {
      console.error(err);
      setStatus('error');
    });
  };
 
  return (
    // Changed h-screen to min-h-screen and added pb-32 for significant bottom spacing
    <div className='min-h-screen w-full px-  '>
      
      {/* Changed h-screen to h-full or min-h-screen to ensure the video background follows the content */}
      <div className='relative w-full min-h-screen object-cover overflow-hidden rounded'>

        {/* Video Background - ensures it covers the full expanded height */}
        <div className='w-full absolute inset-0  -z-10'>
          <video 
            muted 
            autoPlay 
            loop 
            playsInline 
            className='object-cover  w-full h-screen' 
            src={video2} 
          /> 
        </div> 
    
        {/* Content Wrapper - Using justify-start and py-20 to allow natural scrolling */}
        <div className='w-full relative z-10 flex flex-col items-center justify-start py-20'>
          <div ref={containerRef} className="w-full flex flex-col items-center">
            
            {/* Removed the hardcoded px-52 which compresses text on small screens */}
            <h1 
              className='text-black text-center px-4' 
              ref={textRef} 
              style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold' }}
            >
              Let's Connect
            </h1>

            <div className="max-w-[600px] w-[90%] mx-auto bg-white text-black p-10 rounded-2xl shadow-xl mt-16 border border-gray-200">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Contact Me.</h2>
              <p className="text-gray-500 text-sm mb-8">Looking forward to connecting.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                <div className="flex flex-col gap-10">
                  <input 
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors text-black placeholder-gray-400" 
                  />
                  <input 
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors text-black placeholder-gray-400" 
                  />
                  <textarea 
                    rows="3"
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors text-black placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  {status === 'success' && (
                    <p className="text-green-600 text-sm font-medium mb-4">✓ Message sent! I'll get back to you soon.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-medium mb-4">✗ Something went wrong. Please try again.</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;