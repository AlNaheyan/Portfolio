import React from 'react';
import { PROFILE_DATA } from '../utils/data';
import UNADAT_PIC from "../assets/Unadat_intern.png"
import WRIGHTS_PIC from "../assets/Wrights_Intern.png"
import ALLSTARCODE from "../assets/AllStarCode.png"
import CCNY from "../assets/CCNYLogo.jpg"
import SEO from "../assets/SEOLogo.png"
import CODEPATH from "../assets/CodePathLogo.jpeg"
import HEADSTARTER from "../assets/HeadstarterLogo.jpg"
import LINKEDIN from "../assets/linkedin.jpg"
import GITHUB from "../assets/git.png"
import INSTAGRAM from "../assets/insta.jpg"



const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  return (
    <main className="text-slate-950 w-full max-w-fit flex-col md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto" id='page-id'>
        <section id="name-and-about">
            <div className=" items-center flex-1 md:text-left z-[1]">
                <h2 className="text-2xl mt-3 md:text-5xl md:mt-5 mb-2"><b> Hello, I'm Al Naheyan </b>👋</h2>
                <span className="text-m md:text-l font-normal ">A Full Stack Developer and Graphic Designer</span>
                <h2 className='mt-10 text-xl font-bold'>About</h2>
                <p className="w-full text-xs font-normal leading-5 lg:w-[38vw] md:text-sm md:leading-6 md:mb-8">{tagline}</p>
            </div>
        </section>

        <section id="experience">
            <div className="mt-5 items-center flex-1 md:text-left z-[1]">
                <h2 className='text-xl font-bold'>Work Experience</h2>
            </div>
            <div className='mt-5' id='first-experience'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://unadat.com/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={UNADAT_PIC}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> Unadat
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        June 2024 - Present
                                    </div>
                                </div>
                                <div className='font-sans text-xs'> Software Engineer Intern</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3' id='fourth-experience'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://headstarter.co/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={HEADSTARTER}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> Headstarter
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        July 2024 - Present
                                    </div>
                                </div>
                                <div className='font-sans text-xs'> Software Engineer Fellow</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3' id='second-experience'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://www.wrightsresumes.com/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={WRIGHTS_PIC}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> Wright's Resume and Connection
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        August 2023 - December 2023
                                    </div>
                                </div>
                                <div className='font-sans text-xs'> IT Support Intern</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3' id='third-experience'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://allstarcode.org/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={ALLSTARCODE}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> AllStarCode*
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        June 2022 - September 2022
                                    </div>
                                </div>
                                <div className='font-sans text-xs'> Web Developer</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="Education">
            <div className=" items-center flex-1 md:text-left z-[1]">
                <h2 className='mt-10 text-xl font-bold'>Education</h2>
            </div>
            <div className='mt-5' id='first-education'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://www.ccny.cuny.edu/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={CCNY}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> CUNY City College
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        August 2023 - June 2027
                                    </div>
                                </div>
                                <div className='font-sans text-xs'> Bachelor's Degree of Computer Science</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3' id='second-education'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://www.seo-usa.org/scholars/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={SEO}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> SEO Scholars
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        September 2018 - June 2027
                                    </div>
                                </div>
                                <div className='font-sans text-xs'>Participant</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3' id='third-education'>
                <div className='block'>
                    <div className='rounded-lg bg-red flex'>
                        <a className='flex-none cursor-pointer' href="https://www.codepath.org/" target='_blank'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={CODEPATH}></img>
                            </span>
                        </a>
                        <div className='flex-grow ml-4 items-center flex-col group'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-x-2 text-base'>
                                    <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'> CodePath
                                        <span className='inline-flex gap-x-1'></span>
                                        <div className='opacity-0 hover:opacity-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </div>
                                        
                                    </h3>
                                    <div className='text-xs sm:text-sm tabular-nums text-right'>
                                        February 2024 - August 2024
                                    </div>
                                </div>
                                <div className='font-sans text-xs'> Student</div>
                            </div>
                            {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='skills'>
            <div className='flex min-h-0 flex-col gap-y-3'>
                <div>
                    <h2 className='mt-10 text-xl font-bold'>Skills</h2>  
                </div>
                <div className='flex flex-wrap gap-2'>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> React
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> JavaScript
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> C++
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> HTML
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> CSS
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> Tailwind
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> Python
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> Firebase
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80"> Git/GitHub
                        </div>
                </div>
                
            </div>

        </section>

        <section id='contact'>
            <div className=" mt-20 items-center flex-1 md:text-left z-[1]">
                <h2 className="text-3xl mt-3 md:text-5xl  md:mt-5 mb-2"><b> Get in Touch! </b></h2>
                <span className="text-m md:text-l font-normal ">Feel Free to reach out for small chats. </span>
            </div>
            <div id='contactIcons'>
                <div className='mt-5 flex gap-5'>
                    <a className='flex-col cursor-pointer hover:scale-125 transition ease-in duration-300' href="https://www.linkedin.com/in/al-naheyan/" target='_blank'>
                        <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                            <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={LINKEDIN}></img>
                        </span>
                    </a>
                    <a className='flex-col cursor-pointer hover:scale-125 transition ease-in duration-300' href="https://github.com/AlNaheyan" target='_blank'>
                        <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                            <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={GITHUB}></img>
                        </span>
                    </a>
                    <a className='flex-col cursor-pointer hover:scale-125 transition ease-in duration-300' href="https://www.instagram.com/al.naheyan/" target='_blank'>
                        <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                            <img className='aspect-square  h-full w-full object-contain' alt='Unadat-image' src={INSTAGRAM}></img>
                        </span>
                    </a>
                </div>

            </div>
            <div className='mt-10 flex gap-5' id='interactice-buttons'>
                <a className="primary-btn text-white bg-black/80 rounded-lg px-4 py-2 text-s hover:bg-black/70 transition delay-100 " id='contact-button' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttFtTMLtMQXSRqgPTxXgJSNKHxRxfTnlmVrTJBhHtqXCxRNjmlzBSlnhzWSnnPnDFZBXV" target='_blank'>Email Me
                </a> 
                <button className="primary-btn text-black border border-solid   rounded-lg  px-4 py-2 text-s  transition delay-100 hover:bg-black/10" id='resume-button'>Resume 
                </button> 
            </div>
        </section>
        
    </main>
  );
}

export default Hero;