import React from 'react'

const MobileNavbar = ( {isOpen, setIsMenuOpen} ) => {
    const handleScroll = (sectionId) => {
        if (isOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"});
    }

  return (
    <div className='w-screen fixed top-0 z-20'>
        <div className='w-1/2 h-screen flex flex-col p-8 bg-gray-300'>
            <div className='ui-circle ml-10 mt-10'>
                <ul>
                    <li className='mb-5'>
                        <a className='menu-item' onClick={ () => handleScroll("page-id")}>Home </a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item' onClick={ () => handleScroll("name-and-about")}>About Me </a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item' onClick={ () => handleScroll("experience")}>Experience </a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item' onClick={ () => handleScroll("skills")}>Skills </a>
                    </li>
                    <li className='mb-5'>
                        <a className='menu-item' onClick={ () => handleScroll("contact")}>Contacts </a>
                    </li>
            
                </ul>


                <div onClick={ () => {
                    setIsMenuOpen(false);
                }}
                className='w-screen h-screen bg-overlay fixed top-0 -z-10 backdrop-blur-sm tranition delay-150 '>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar