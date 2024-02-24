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
         <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/70 text-gray-900": "text-white"}`}>
            <div className='flex items-center justify-between'>
                <div className="mx-10">
                    <h4 className="font-bold text-4xl">
                        Lax<span className="text-blue-600">miii.</span>
                    </h4>
                </div>
                <div className={`${sticky? "md: bg-white/0 bg-white": "bg-white" } text-gray-900 lg:block hidden px-7 py-2 font-medium rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {menuLinks?.map((menu,i)=> (
                            <li key={i} className="hover:text-blue-600 px-10">
                                <a href={menu} >{menu}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div 
                onClick={()=> setOpen(!open)}
                className={`z-[999] ${open && "text-gray-900"} text-4xl lg:hidden m-5`}>
                    {open ? <ion-icon name="close"></ion-icon> : <ion-icon name="menu"></ion-icon>}
                </div>
                <div className={`lg:hidden text-gray-900 absolute w-1/2 h-screen px-7 py-2 font-medium duration-300 bg-white top-0 ${ open ? "right-0" : "right-[-100%]"}`}>
                    <ul className='flex flex-col gap-10 justify-center h-full text-lg py-2'>
                        {menuLinks?.map((menu, i)=>(
                            <li 
                            onClick={()=> setOpen(false)}
                            key={i} 
                            className='px-6 hover:text-blue-700'>
                                <a href={menu}>{menu}</a>
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
