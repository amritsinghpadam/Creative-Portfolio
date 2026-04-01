import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    useGSAP(() => {
        gsap.from("#mt", {
            opacity: 0,
            duration: 2,
            delay: 0.5,
            x: 50,
            scrollTrigger: {
                trigger: "#mt",
                start: "top 80%",
                end: "top 20%",
                toggleActions: "none none none play",
                scrub: 1,
            }
        });

        gsap.from("#pt", {
            opacity: 0,
            duration: 2,
            delay: 0.9,
            x: 50,
            scrollTrigger: {
                trigger: "#pt",
                start: "top 80%",
                end: "top 20%",
                toggleActions: "none none none play",
                scrub: 1,
            }
        });

        gsap.from(".bot-img", {
            opacity: 0,
            duration: 6,
            delay: 2,
            x: -40,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".bot-heading", 
                start: "top 100%",
                end: "top 70%",
                toggleActions: "play none none none",
                scrub: 1,
            }
        });
    });

    return (
        <div className='bg-[url("https://img.freepik.com/free-vector/white-abstract-background_23-2148833155.jpg?t=st=1773423829~exp=1773427429~hmac=7129eb6274c572efb0630147c6ba9638bbdb13ae0a73cff2fad015b2702bf516")] bg-cover min-h-screen flex flex-col w-full overflow-x-hidden'>
            
            {/* --- Text Content Section --- */}
            <div id='page2' className='flex justify-center w-full px-6 md:px-0'>
                <div className='flex flex-col items-center text-center w-full max-w-7xl'>
                    {/* Changed py-10 px-24 to responsive py-10 md:px-24 and text-4xl to text-6xl */}
                    <h1 id='mt' className='font-extrabold justify-center rounded-5xl py-10 px-4 md:px-24 mt-10 font-mono text-4xl md:text-6xl leading-tight'>
                        The Mind Behind The Code
                    </h1>

                    <div className="items-center w-full">
                        {/* Changed text-3xl to text-xl md:text-3xl and text-justify to md:text-center for better mobile flow */}
                        <p id='pt' className='text-xl md:text-3xl text-zinc-500 py-6 md:py-10 px-4 md:px-10 mt-3 font-bold text-justify md:text-center leading-relaxed'>
                            I’m <span className='text-black'>Amrit Singh</span>, B.Tech CSE student with a <span className='text-black'>9.4 CGPA</span>, dedicated to the intersection of robust engineering and <span className=''>creative frontend design.</span> I specialize in building responsive, high-performance web applications using <span className='text-black'>React and Tailwind CSS</span>, while <span className='text-black'>leveraging GSAP</span> to bring interfaces to life and with a strong foundation in <span className=''>Python DSA</span>, I focus on turning complex technical logic into seamless, visually <span className='text-black'>engaging user experiences.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Toolkit / Marquee Section --- */}
            {/* Swapped mt-[118px] for a responsive margin mt-16 md:mt-[118px] */}
            <div className='w-full py-16 bg-white flex flex-col items-center mt-16 md:mt-[118px] overflow-hidden'>
                {/* Responsive text-3xl to text-5xl */}
                <h1 className='font-extrabold font-mono text-3xl md:text-5xl mb-10 md:mb-16 bot-heading'>My Toolkit.</h1>

                <div className='flex w-full overflow-hidden relative'>
                    {/* Responsive gap: gap-12 on mobile, gap-36 on desktop */}
                    <div className='flex flex-nowrap items-center gap-12 md:gap-36 w-max animate-marquee'>

                        {/* Set 1 */}
                        <div className='flex items-center gap-12 md:gap-36 shrink-0'>
                            <img className='bot-img h-16 md:h-28 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" />
                            <img className='bot-img h-16 md:h-28 object-contain' src="https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp" alt="CSS" />
                            <img className='bot-img h-16 md:h-28 object-contain' src="https://images.seeklogo.com/logo-png/33/1/javascript-logo-png_seeklogo-330541.png" alt="JavaScript" />
                            <img className='bot-img h-12 md:h-24 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" />
                            <img className='bot-img h-16 md:h-28 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGcPQW0K_t9jwwFeeIfEr5dYA0N7dL3qZDA&s" alt="Tailwind" />
                            <img className='bot-img h-12 md:h-24 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png" alt="Python" />
                            <img className='bot-img h-16 md:h-28 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzPq-1GBQiKEBQT5hpPxj8c8gi8-oKI0bng&s" alt="Java" />
                        </div>

                        {/* Duplicate Sets for infinite scroll */}
                        {[2, 3].map((key) => (
                            <div key={key} className='flex items-center gap-12 md:gap-36 shrink-0'>
                                <img className='bot-img h-16 md:h-28 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" />
                                <img className='bot-img h-16 md:h-28 object-contain' src="https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp" alt="CSS" />
                                <img className='bot-img h-16 md:h-28 object-contain' src="https://images.seeklogo.com/logo-png/33/1/javascript-logo-png_seeklogo-330541.png" alt="JavaScript" />
                                <img className='bot-img h-12 md:h-24 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" />
                                <img className='bot-img h-16 md:h-28 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGcPQW0K_t9jwwFeeIfEr5dYA0N7dL3qZDA&s" alt="Tailwind" />
                                <img className='bot-img h-12 md:h-24 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png" alt="Python" />
                                <img className='bot-img h-16 md:h-28 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzPq-1GBQiKEBQT5hpPxj8c8gi8-oKI0bng&s" alt="Java" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page2;
