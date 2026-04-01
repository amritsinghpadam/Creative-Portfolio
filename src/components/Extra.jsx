import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    id: 1, 
    label: 'TECHNICAL FOUNDATION', 
    heading: 'Frontend Enthusiast.', 
    sub: 'Focusing on clean, scalable architecture. As a CSE student, I prioritize structural integrity and efficient algorithms before the first pixel is even rendered.',
    color: '#ffffff' 
  },
  { 
    id: 2, 
    label: 'MOTION WITH PURPOSE', 
    heading: 'Interactive Interface.', 
    sub: 'Using GSAP and React to build interfaces that feel alive. I believe animations should guide the user, not distract them from the core experience.',
    color: '#f3f3f6' 
  },
  { 
    id: 3, 
    label: 'TECHNICAAL FOUNDATION', 
    heading: "Tech-Savvy Engineer", 
    sub: 'Bridging the gap between The complex backend logic and high-fidelity frontend execution to create seamless, end-to-end digital products.',
    color: '#e8e8ed' 
  },
];

const Extra = () => {
  const container = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.step-card');
    
    const master = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${cards.length * 150}%`, 
        pin: true,
        scrub: 1.2, 
      }
    });

    cards.forEach((card, i) => {
      if (i !== 0) {
        master.fromTo(card, 
          { yPercent: 100, clipPath: "inset(10% 0% 0% 0%)" },
          { yPercent: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.inOut" }
        );
      }

    
      const elements = card.querySelectorAll('.content-animate');
      master.from(elements, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8");
      
      master.to({}, { duration: 0.6 }); 
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen overflow-hidden bg-white">
      {steps.map(({ id, heading, sub, label, color }) => (
        <div
          key={id}
          className="step-card absolute inset-0 w-full h-full flex flex-col justify-center items-center px-8 md:px-20"
          style={{ backgroundColor: color }}
        >
          
          <div className="max-w-5xl w-full border-l border-black/10 pl-8 md:pl-16 py-10 relative">
            
         
            <span className="content-animate block font-mono text-[10px] font-bold tracking-[0.4em] text-gray-400 mb-6 uppercase">
               {label}
            </span>
            
           
            <h2
              className="content-animate text-black font-serif font-medium tracking-tight leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {heading}
            </h2>
            
         
            <p className="content-animate max-w-xl text-gray-500 font-sans text-sm md:text-lg leading-relaxed opacity-80">
              {sub}
            </p>

          </div>
        </div>
      ))}
    </section>
  );
};

export default Extra;