import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // 1. Import the plugin

// 2. Register the ScrollToPlugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NextStepCTA = () => {
  const sectionRef = useRef(null);
  const kickerRef = useRef(null);
  const titleRef = useRef(null);
  const arrowRef = useRef(null);

  // 3. Smooth Scroll Function
  const handleScrollDown = () => {
    // This scrolls to the bottom of the current section's viewport
    // or you can set a specific pixel value like 1000
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: sectionRef.current.offsetTop + window.innerHeight, autoKill: false },
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(kickerRef.current,
      { opacity: 0, y: 20, letterSpacing: "0.4em" },
      { opacity: 1, y: 0, letterSpacing: "0.1em", duration: 1.2, ease: "power3.out" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 100, rotateX: -30, transformOrigin: "bottom center" },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.6, ease: "power4.out" },
      "-=0.8"
    )
    .fromTo(arrowRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=1"
    );

    // Floating animation
    gsap.to(arrowRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
      delay: 1
    });

  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      
      <div style={styles.content}>
        <p ref={kickerRef} style={styles.kicker}>What's Next?</p>
        
        <h2 ref={titleRef} style={styles.title}>
          Let's build something <br />
          amazing.
        </h2>
      </div>

      {/* 4. Added onClick and specific cursor styling */}
      <div 
        ref={arrowRef} 
        onClick={handleScrollDown} 
        style={styles.arrow}
      >
        ↓
      </div>

    </section>
  );
};

const styles = {
  section: {
    minHeight: '85vh',        
    width: '100%',            
    marginTop: '8vh',         
    display: 'flex',
    flexDirection: 'column',  
    alignItems: 'center',     
    justifyContent: 'center', 
    backgroundColor: '#ffffff',
    color: '#111111',
    perspective: '1000px',    
    fontFamily: '"Inter", "-apple-system", sans-serif',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',     
    justifyContent: 'center', 
    textAlign: 'center',      
  },
  kicker: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#888888',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    margin: 0,                
  },
  title: {
    margin: '1.5rem 0 0 0',     
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
    fontWeight: 800,
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  arrow: {
    marginTop: '5rem',        
    fontSize: '2rem',
    fontWeight: 300,
    color: '#888888',
    cursor: 'pointer', // Makes it look clickable
    padding: '10px',   // Increases the click area
    userSelect: 'none'
  }
};

export default NextStepCTA;