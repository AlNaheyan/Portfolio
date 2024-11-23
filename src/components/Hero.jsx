import React, { useState } from 'react';
import UNADAT_PIC from "../assets/Unadat_intern.png"
import WRIGHTS_PIC from "../assets/Wrights_Intern.png"
import ALLSTARCODE from "../assets/AllStarCode.png"
import CCNY from "../assets/CCNYLogo.jpg"
import SEO from "../assets/SEOLogo.png"
import CODEPATH from "../assets/CodePathLogo.jpeg"
import HEADSTARTER from "../assets/HeadstarterLogo.jpg"
import GITHUB from "../assets/git.png"


const Hero = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}> 
        <div className='dark:bg-zinc-900'>
            <main className="text-slate-950 dark:text-slate-50 w-full max-w-3xl flex-col md:flex-row md:items-center pt-20 md:pt-20 pb-20 px-6 mx-auto" id='page-id'>
                <section id="name-and-about">
                    <div className=" items-center flex-1 md:text-left z-[1]">
                        <h2 className="text-5xl mt-3 md:text-6xl md:mt-5 mb-2 "><b> Hey, I'm Al Naheyan </b>👋</h2>
                        <span className="text-l md:text-xl font-normal dark:text-white/80">A Full Stack Developer and Graphic Designer</span>
                        <h2 className='mt-10 text-xl font-bold'>About</h2>
                        <p className="w-full text-xs font-normal leading-5 md:text-sm md:leading-6 md:mb-8 dark:text-white/80">Second-year Computer Science student, Software Engineer. Previously a Software Engineering Intern at Unadat. My passion for solving problems brought me to the Grove School of Engineering at City College of New York and pursue for Software Engineering. During my free time, I enjoy playing video games and travelling.</p>
                    </div>
                </section>

                <section id="experience">
                    <div className="mt-5 items-center flex-1 md:text-left z-[1]">
                        <h2 className='text-xl font-bold'>Work Experience</h2>
                    </div>

                    <div className='mt-3' id='fourth-experience'>
                        <div className='block'>
                            <div className='rounded-lg bg-red flex'>
                                <a className='flex-none cursor-pointer' href="https://headstarter.co/" target='_blank'>
                                    <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground dark:border-zinc-950'>
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
                                                July 2024 - Oct 2024
                                            </div>
                                        </div>
                                        <div className='font-sans text-xs'> Software Engineer Fellow</div>
                                    </div>
                                    {/* <div className='mt-2 text-xs sm:text-sm'> Collaborated with Technical, Product, and Sales teams to develop automated features and user interfaces, improving website functionality and user experience by 20%. Integrated designs with tech lead on Google Cloud, enhancing deployment efficiency and reducing release times by 15% </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3' id='first-experience'>
                        <div className='block'>
                            <div className='rounded-lg bg-red flex'>
                                <a className='flex-none cursor-pointer' href="https://unadat.com/" target='_blank'>
                                    <span className='relative flex shrink-0 overflow-hidden dark:border-zinc-950  rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
                                        <img className='aspect-square  h-full w-full object-contain dark:invert' alt='Unadat-image' src={UNADAT_PIC}></img>
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
                                                June 2024 - August 2024
                                            </div>
                                        </div>
                                        <div className='font-sans text-xs'> Software Engineer Intern</div>
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
                                    <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground dark:border-zinc-950'>
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
                                    <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground dark:border-zinc-950'>
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
                                    <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground dark:border-zinc-950'>
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
                                    <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground dark:border-zinc-950'>
                                        <img className='aspect-square h-full w-full object-contain' alt='Unadat-image' src={SEO}></img>
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
                                    <span className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground dark:border-zinc-950'>
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
                                                February 2024 - November 2024
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
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> React
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Next.js
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> React Native
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> JavaScript
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> TypeScript
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> jQuery
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> PHP
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> SQL
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> C++
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> HTML
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> CSS
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Tailwind
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Python
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Firebase
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Supabase
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Git/GitHub
                                </div>
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Vercel
                                </div>
                        </div>
                        
                    </div>

                </section>

                <section id='contact'>
                    <div className=" mt-20 items-center flex-1 md:text-left z-[1]">
                        <h2 className="text-3xl mt-3 md:text-5xl  md:mt-5 mb-2"><b> Get in Touch! </b></h2>
                        <span className="text-m md:text-l font-normal dark:text-white/80">Feel Free to reach out for small chats. </span>
                    </div>
                    <div id='contactIcons'>
                        <div className='mt-6 flex gap-5'>
                            <a className='dark:invert flex-col cursor-pointer' href="https://www.linkedin.com/in/al-naheyan/" target='_blank'>
                                <span className='relative flex shrink-0 mt-1 overflow-hidden  m-auto bg-muted-background dark:bg-foreground'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="#000"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/></svg>
                                </span>
                            </a>
                            <a className='flex-col cursor-pointer' href="https://github.com/AlNaheyan" target='_blank'>
                                <span className='dark:invert relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto'>
                                    <img className='aspect-square h-full w-full object-contain' alt='Unadat-image' src={GITHUB}></img>
                                </span>
                            </a>
                            <a className='dark:invert flex-col cursor-pointer' href="https://www.instagram.com/al.naheyan/" target='_blank'>
                                <span className='relative text-red flex mt-1 shrink-0 overflow-hidden  m-auto bg-muted-background dark:bg-foreground'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="#000"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
                                </span>
                            </a>
                        </div>

                    </div>
                    <div className='mt-10 flex gap-5' id='interactice-buttons'>
                        <a className="primary-btn text-white dark:text-black bg-black/80 dark:bg-white rounded-lg px-4 py-2 text-s hover:bg-black/70 dark:hover:bg-white/80" id='contact-button' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttFtTMLtMQXSRqgPTxXgJSNKHxRxfTnlmVrTJBhHtqXCxRNjmlzBSlnhzWSnnPnDFZBXV" target='_blank'>Email Me
                        </a> 
                        <a className="primary-btn cursor-pointer text-black dark:text-white border border-solid dark:border-white/10 rounded-lg px-4 py-2 text-s hover:bg-black/10 dark:hover:bg-white/10" id='resume-button' href="https://drive.google.com/file/d/1FrJ4bvFGFTGl69bpHwIWcklyHftAfAfy/view?usp=sharing" target='_blank'>Resume 
                        </a> 
                    </div>
                </section>
                <div onClick={toggleMode}>
                    <span className='fixed bottom-10 right-10 h-10 w-10 pt-2 pl-2 bg-zinc-200/40 hover:bg-zinc-200/80 dark:bg-black/20 dark:hover:bg-black/10 duration-100 rounded-full cursor-pointer dark:invert'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </span>
                </div>
            </main>
        </div>
    </div>
  );
}

export default Hero;