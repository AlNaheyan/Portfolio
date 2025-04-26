import { useState } from 'react';
import UNADAT_PIC from "../assets/Unadat_intern.png"
import WRIGHTS_PIC from "../assets/Wrights_Intern.png"
import ALLSTARCODE from "../assets/AllStarCode.png"
import CCNY from "../assets/CCNYLogo.jpg"
import SEO from "../assets/SEOLogo.png"
import CODEPATH from "../assets/CodePathLogo.jpeg"
import HEADSTARTER from "../assets/HeadstarterLogo.jpg"
import GITHUB from "../assets/git.png"
import ACADION from "../assets/Acadion_Pic.png"
import CATCHAT from "../assets/Catchat_pic.png"


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
                        <span className="text-l md:text-xl font-normal dark:text-white/80">A Full Stack Software Engineer</span>
                        <h2 className='mt-10 text-2xl font-bold'>About</h2>
                        <p className="w-full text-xs font-normal leading-5 md:text-sm md:leading-6 md:mb-8 dark:text-white/80">Second-year Computer Science student, Software Engineer. I enjoy building things and generating ideas. Currently learning ML/AI through books, projects and errors. My passion for solving problems brought me to the Grove School of Engineering at City College of New York. Always open to connecting and creating something awesome!</p>
                    </div>
                </section>

                <section id="experience">
                    <div className="mt-5 items-center flex-1 md:text-left z-[1]">
                        <h2 className='text-2xl font-bold'>Work Experience</h2>
                    </div>

                    <div className='mt-3' id='fifth-experience'>
                        <div className='block'>
                            <div className='rounded-lg bg-red flex'>
                                <a className='flex-none cursor-pointer' href="https://unadat.com/" target='_blank'>
                                    <span className='relative flex shrink-0 overflow-hidden dark:border-zinc-950  rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground'>
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
                                                January 2025 - Present
                                            </div>
                                        </div>
                                        <div className='font-sans text-xs'> Tech Fellow </div>
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
                        <h2 className='mt-10 text-2xl font-bold'>Education</h2>
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
                            <h2 className='mt-10 text-2xl font-bold'>Skills</h2>  
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
                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80"> Flask
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

                <section id='projects'>
                    <div className='space-y-5 w-full py-10'>
                        <div className=" items-center flex-1 md:text-left z-[1]">
                            <h2 className='mt-3 text-2xl font-bold'>Projects</h2>
                        </div>
                        <div className='grid grid-cols-2 gap-8 w-full'>
                            <div id='cs_scheduler' className='rounded-lg flex flex-col overflow-hidden border dark:border-zinc-700 hover:shadow-lg h-full'>
                                <a className='block cursor-pointer' href='https://github.com/AlNaheyan/ccny_cs_scheduler'>
                                    <img src={ACADION} className='mx-auto h-40 w-full object-cover object-top'></img>
                                </a>
                                <div className='flex flex-col px-4 pt-2'>
                                    <div className='space-y-2'>
                                        <h3 className='font-semibold text-xl'>
                                            Acadion
                                        </h3>
                                        <p className='text-xs opacity-70'>
                                            January 2025
                                        </p>
                                        <div className='max-w-full text-xs'>
                                            <p>
                                                Acadion simplify making your schedule for the next semester with the courses you are eligible for. You can also check for any courses in Computer Science degree.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm mt-auto flex flex-col px-4 pt-1'>
                                    <div className='mt-2 flex flex-wrap gap-1'>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            Next.js
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            TypeScript
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            TailwindCSS
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            Flask
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            Supabase
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            PostgresSQL
                                        </div>
                                        
                                    </div>
                                </div>
                                <hr className='mt-3 mb-1'></hr>
                                <div className='flex items-center pt-2 px-4 pb-4'>
                                    <div className='flex flex-row flex-wrap items-center gap-1'>
                                        <a target='_blank' href='https://github.com/AlNaheyan/ccny_cs_scheduler'>
                                            <div className="inline-flex gap-2 items-center rounded-md border px-2.5 py-1 text-[12px] font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80">
                                                <svg viewBox="0 0 438.549 438.549" className="size-3.5"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
                                                <p>Source</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id='walletro' className='rounded-lg flex flex-col overflow-hidden border dark:border-zinc-700 hover:shadow-lg h-full'>
                                <a className='block cursor-pointer' href='https://github.com/AlNaheyan/walletro'>
                                    <img src={ACADION} className='mx-auto h-40 w-full object-cover object-top'></img>
                                </a>
                                <div className='flex flex-col px-4 pt-2'>
                                    <div className='space-y-2'>
                                        <h3 className='font-semibold text-xl'>
                                            Walletro
                                        </h3>
                                        <p className='text-xs opacity-70'>
                                            November 2024
                                        </p>
                                        <div className='max-w-full text-xs'>
                                            <p>
                                                Simplify your fianancial budgeting with Walltro. Add incomes and expenses everytime you purchase or earn to track weekly and monthly budgeting. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm mt-auto flex flex-col px-4 pt-1'>
                                    <div className='mt-2 flex flex-wrap gap-1'>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            React Native
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            TypeScript
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            NativeWind
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            Supabase
                                        </div>
                                    </div>
                                </div>
                                <hr className='mt-3 mb-1'></hr>
                                <div className='flex items-center pt-2 px-4 pb-4'>
                                    <div className='flex flex-row flex-wrap items-center gap-1'>
                                        <a target='_blank' href='https://github.com/AlNaheyan/walletro'>
                                            <div className="inline-flex gap-2 items-center rounded-md border px-2.5 py-1 text-[12px] font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80">
                                                <svg viewBox="0 0 438.549 438.549" className="size-3.5"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
                                                <p>Source</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id='catchat' className='rounded-lg flex flex-col overflow-hidden border dark:border-zinc-700 hover:shadow-lg h-full'>
                                <a className='block cursor-pointer' href='https://github.com/AlNaheyan/walletro'>
                                    <img src={CATCHAT} className='mx-auto h-40 w-full object-cover object-top'></img>
                                </a>
                                <div className='flex flex-col px-4 pt-2'>
                                    <div className='space-y-2'>
                                        <h3 className='font-semibold text-xl'>
                                            CatChat
                                        </h3>
                                        <p className='text-xs opacity-70'>
                                            April 2025
                                        </p>
                                        <div className='max-w-full text-xs'>
                                            <p>
                                                Web102 Final project: Simple media-like webapp built to connect cat enthusiasts to post anything related to Cats. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm mt-auto flex flex-col px-4 pt-1'>
                                    <div className='mt-2 flex flex-wrap gap-1'>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            React
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            JavaScript
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            Tailwind
                                        </div>
                                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-800 hover:bg-zinc-100/80 px-2 py-0 text-[10px]">
                                            Supabase
                                        </div>
                                    </div>
                                </div>
                                <hr className='mt-3 mb-1'></hr>
                                <div className='flex items-center pt-2 px-4 pb-4'>
                                    <div className='flex flex-row flex-wrap items-center gap-1'>
                                        <a target='_blank' href='https://github.com/AlNaheyan/catchat'>
                                            <div className="inline-flex gap-2 items-center rounded-md border px-2.5 py-1 text-[12px] font-medium  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black shadow dark:hover:bg-white/80">
                                                <svg viewBox="0 0 438.549 438.549" className="size-3.5"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
                                                <p>Source</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='contact'>
                    <div className=" mt-10 items-center flex-1 md:text-left z-[1]">
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
                        <a className="primary-btn cursor-pointer text-black dark:text-white border border-solid dark:border-white/10 rounded-lg px-4 py-2 text-s hover:bg-black/10 dark:hover:bg-white/10" id='resume-button' href="https://drive.google.com/file/d/1UOEe0BgDowuONcDRTXjX_MDPneAkpYUL/view?usp=drive_link" target='_blank'>Resume 
                        </a> 
                    </div>
                </section>
                <div onClick={toggleMode}>
                    <span className='fixed bottom-10 right-10 h-10 w-10 pt-2 pl-2 bg-zinc-200/40 hover:bg-zinc-200/80 dark:bg-black/20 dark:hover:bg-black/10 duration-100 rounded-full cursor-pointer dark:invert'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-line join="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </span>
                </div>
            </main>
        </div>
    </div>
    );
}

export default Hero;