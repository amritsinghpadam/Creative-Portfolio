import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Extra2 from '../components/Extra2'
gsap.registerPlugin(ScrollTrigger);

const StickyJourney = () => {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightColumnRef = useRef(null);

  const theme = {
    pageBg: '#ffffff',
    textMain: '#09090b',
    textSub: '#71717a',
    cardBg: '#f4f4f5',
    cardBorder: '#e4e4e7',
    cardTextMain: '#18181b',
    cardTextSub: '#52525b',
    hoverGray: '#e4e4e7'
  };

  const projectData = [
    {
      title: "Quick Notes App",
      desc: "A lightweight, markdown-supported note-taking application designed for speed and minimal friction. Features a clean distraction-free UI.",
      img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600",
      stack: ["React", "Tailwind", "Javascript"],
      github: "https://github.com/amritsinghpadam/notesapp" 
    },
    {
      title: "Dynamic API Gallery",
      desc: "An interactive media gallery that fetches and filters content from multiple REST APIs. Includes advanced search functionality, lazy loading, and dynamic routing.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop&q=80",
      stack: ["Axios", "React", "Tailwind" ,"REST API"],
      github: "https://github.com/amritsinghpadam/gallery" 
    },
    {
      title: "UI Web Interface",
      desc: "A comprehensive design system and component library focused on accessibility and user experience. Features high-fidelity micro-interactions and responsive architecture.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1055&auto=format&fit=crop",
      stack: ["GSAP", "React", "CSS"],
      github: "https://github.com/amritsinghpadam/UI-Project" 
    },
    {
      title: "Profile Card UI",
      desc: "A sleek, professional profile interface featuring effects and elegant hover states. Optimized for personal branding and social media integration.",
      img: "https://cdn.dribbble.com/userupload/15832603/file/original-5179498434b50e885eea6e526217e731.png?resize=400x0",
      stack: ["React", "CSS"],
      github: "https://github.com/amritsinghpadam/card-basic-ui-project" 
    }
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: rightColumnRef.current,
        start: "top 15%",
        end: "bottom bottom-=15%",
        pin: leftContentRef.current,
        pinSpacing: false,
      });
    });

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.journey-card');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7,
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
      mm.revert();
    };
  }, []);

  return (
    <div className="projects-section-wrapper">
      <style>{`
        .projects-section-wrapper {
          padding-top: 10vh;
          padding-bottom: 10vh;
          background-color: ${theme.pageBg};
          font-family: 'Inter', system-ui, sans-serif;
        }
        .main-container {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          gap: 3rem;
        }
        .left-side { width: 100%; }
        .right-side { width: 100%; z-index: 10; }
        
        .main-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: ${theme.textMain};
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .journey-card {
          background-color: ${theme.cardBg};
          border: 1px solid ${theme.cardBorder};
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative; /* Crucial for absolute icon positioning */
          transition: all 0.3s ease;
        }

        .card-img-container {
          width: 100%;
          height: 180px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .github-link {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          color: ${theme.textMain};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: transparent;
          transition: all 0.4s ease;
        }

        .github-link:hover {
          background-color: ${theme.hoverGray};
          color: ${theme.textSub};
        }

        /* Desktop Overrides - Restoring your original UI exactly */
        @media (min-width: 1024px) {
          .projects-section-wrapper { padding-top: 15vh; padding-bottom: 15vh; }
          .main-container { flex-direction: row; padding: 0 5vw; gap: 0; }
          .left-side { width: 40%; }
          .right-side { width: 60%; }
          .main-title { font-size: 3.5rem; }
          .left-content-inner { padding-right: 4rem; }

          .journey-card { 
            flex-direction: row; 
            height: 320px; 
            padding: 2rem;
          }
          .card-img-container { 
            width: 180px; 
            height: 140px; 
            margin-bottom: 0;
            order: 2; /* Keeps image on the right */
          }
          .card-text-content {
            order: 1;
            padding-right: 2rem;
          }
          .github-link {
             bottom: 2rem;
             right: 2rem;
          }
        }
      `}</style>

      <div ref={containerRef} className="main-container">
        <div className="left-side">
          <div ref={leftContentRef} className="left-content-inner">
            <h2 className="main-title">
              Selected <br/> Project <br /> Works.
            </h2>
            <p style={{ color: theme.textSub, marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
              A collection of high-performance React applications where fluid GSAP animations meet structured logic.
            </p>
          </div>
        </div>

        <div ref={rightColumnRef} className="right-side">
          {projectData.map((item, idx) => (
            <div
              key={idx}
              className="journey-card"
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('.project-img');
                if (img) img.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.project-img');
                if (img) img.style.filter = 'grayscale(100%)';
              }}
            >
              <div className="card-text-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.8rem', color: theme.cardTextMain, margin: '0 0 0.8rem 0', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: theme.cardTextSub, 
                  lineHeight: 1.5, 
                  margin: 0,
                  WebkitLineClamp: 4,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.desc}
                </p>

                <div style={{ 
                  marginTop: 'auto', 
                  paddingTop: '1rem', 
                  borderTop: `1px solid ${theme.cardBorder}`,
                  display: 'flex', 
                  gap: '12px',
                  width: '80%' // Prevents text from hitting the absolute icon
                }}>
                  {item.stack.map((tech, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', color: theme.textSub, fontWeight: 600 }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="card-img-container">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="project-img" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'grayscale(100%)', 
                    transition: 'filter 0.6s ease' 
                  }} 
                />
              </div>

              <a href={item.github} target="_blank" rel="noreferrer" className="github-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Extra2/>
    </div>
  );
};

export default StickyJourney;