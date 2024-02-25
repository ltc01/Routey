import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = ["Home", "About", "Skills","Projects","Contact"];

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            // const nav = document.querySelector('nav')
            window.scrollY > 0 ? setSticky(true): setSticky(false)
        })
    },[])
  return (
      <header>
         <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky && "border-b border-gray-400 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20"}`}>
            <div className='flex items-center justify-between'>
                <div className="ml-24">
                    <h4 className="font-bold text-4xl text-white">
                        Lax<span className="text-blue-400">miii.</span>
                    </h4>
                </div>
                <div className={`${sticky && "text-white" } lg:block hidden pr-20 py-2 font-medium`}>
                    <ul className="flex items-center gap-1 py-3 text-lg">
                        {menuLinks?.map((menu,i)=> (
                            <li key={i} className="hover:text-blue-600 px-7">
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
                <div 
                onClick={()=> setOpen(!open)}
                className={`z-[999] text-4xl ${open && 'text-gray-900'} lg:hidden m-5`}>
                    {open ? <ion-icon name="close"></ion-icon> : <ion-icon name="menu"></ion-icon>}
                </div>
                <div className={`lg:hidden rounded-l-xl ${open ? 'duration-300 text-gray-900 right-0': '-right-[100%]'} absolute backdrop-blur-xl border-l border-gray-300 w-1/3 px-7 bg-white py-20 font-medium top-3`}>
                    <ul className='flex flex-col gap-9 justify-center text-lg py-2'>
                        {menuLinks?.map((menu, i)=>(
                            <li 
                            onClick={()=> setOpen(false)}
                            key={i} 
                            className='px-6 hover:text-blue-500'>
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
      </header>
  );
};

export default Header;
