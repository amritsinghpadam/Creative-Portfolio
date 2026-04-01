import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickyJourney = () => {
  const containerRef = useRef(null);
  const leftWrapperRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightColumnRef = useRef(null);

  // State to track if we are on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to update state on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value and add listener
    handleResize();
    window.addEventListener('resize', handleResize);

    let ctx = gsap.context(() => {
      // 1. Only Pin the left column if NOT on mobile
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: leftWrapperRef.current,
          start: "top 15%",
          end: () => `+=${rightColumnRef.current.offsetHeight - 350}`, 
          pin: leftContentRef.current,
          pinSpacing: false,
        });
      }

      // 2. Card Entrance Animation (Works on both desktop and mobile)
      const cards = gsap.utils.toArray('.journey-card');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]); // Re-run effect when switching between mobile/desktop

  const theme = {
    pageBg: '#ffffff',
    textMain: '#09090b',
    textSub: '#71717a',
    cardBg: '#f4f4f5',
    cardBorder: '#e4e4e7',
    cardTextMain: '#18181b',
    cardTextSub: '#52525b'
  };

  const portfolioData = [
    {
      id: "01",
      year: "2024 - Present",
      tag: "Academics",
      title: "Computer Science and AI-ML",
      desc: "Currently in my 4th semester of B.Tech CSE-AIML. Kicked off my first semester with a 9.4 CGPA and maintaining a 9.2 overall. Obsessed with writing clean, optimized, and maintainable code."
    },
    {
      id: "02",
      year: "Frontend",
      tag: "React / GSAP",
      title: "Interactive Architecture",
      desc: "Building highly responsive, animated user interfaces. Focused on component-driven design and translating static concepts into fluid, complex web experiences."
    },
    {
      id: "03",
      year: "Backend",
      tag: "Python",
      title: "Algorithmic Logic",
      desc: "Solving complex structural puzzles. Experienced with array manipulation, sliding window techniques, and optimizing data structures for absolute lowest time complexity."
    }
  ];

  return (
    <div style={{ 
      paddingTop: isMobile ? '10vh' : '20vh', 
      backgroundColor: theme.pageBg, 
      fontFamily: "'Inter', system-ui, sans-serif",
      minHeight: '100vh' 
    }}>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row', // Stack columns on mobile
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 1.5rem' : '0 5vw',
          position: 'relative'
        }}
      >
        {/* LEFT COLUMN: Pinned Title (Desktop) / Normal Header (Mobile) */}
        <div ref={leftWrapperRef} style={{ 
          width: isMobile ? '100%' : '40%', 
          position: 'relative',
          marginBottom: isMobile ? '3rem' : '0'
        }}>
          <div ref={leftContentRef} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            paddingRight: isMobile ? '0' : '4rem' 
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '2.4rem' : '3.5rem', 
              fontWeight: 700, 
              color: theme.textMain, 
              margin: 0, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}>
              Amrit's<br/>Engineering<br/>Experience.
            </h2>
            <p style={{ 
              color: theme.textSub, 
              marginTop: '1.5rem', 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              maxWidth: '300px', 
              lineHeight: 1.6 
            }}>
              A straightforward breakdown of my academic background and technical stack.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Cards */}
        <div ref={rightColumnRef} style={{ 
          width: isMobile ? '100%' : '60%', 
          paddingTop: isMobile ? '0' : '5vh', 
          paddingBottom: '10vh', 
          zIndex: 10 
        }}>
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="journey-card"
              style={{
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: '16px',
                padding: isMobile ? '2rem' : '3rem', // Smaller padding for mobile
                marginBottom: '2rem',
                boxShadow: '0 4px 20px -10px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Meta Tags */}
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                marginBottom: isMobile ? '1.5rem' : '2rem', 
                alignItems: 'center',
                flexWrap: 'wrap' // Allow wrapping on very small screens
              }}>
                <span style={{
                  backgroundColor: '#ffffff',
                  color: theme.textMain,
                  border: `1px solid ${theme.cardBorder}`,
                  padding: '4px 12px',
                  borderRadius: '30px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {item.year}
                </span>
                <span style={{
                  border: '1px solid #d4d4d8',
                  color: theme.cardTextSub,
                  padding: '4px 12px',
                  borderRadius: '30px',
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}>
                  {item.tag}
                </span>
              </div>

              {/* Text Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <h3 style={{
                  fontSize: isMobile ? '1.6rem' : '2rem',
                  color: theme.cardTextMain,
                  margin: 0,
                  fontWeight: 600
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  color: theme.cardTextSub,
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyJourney;