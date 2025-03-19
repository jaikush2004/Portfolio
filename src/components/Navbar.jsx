import React, { useState } from 'react'
// import pic from "../../../portfolio\portfolio\public\mypic.jpg"
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll"




const Navbar = () => {
    const [menu, setmenu]= useState(false);
    const navitems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact Us"
        },
    ]
  return (
    <>
    <div name='Navbar' className='max-w-screen-2xl container mx-auto px-4  md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white'>
        <div className='flex justify-between items-center  h-16'>
            <div className='flex space-x-2 ' >
                <img src="/mypic.jpg" className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Jai Kuma<span className='text-green-500 text-2xl'>r</span>
                <p className='text-sm'>Web developer</p>
                </h1>
            </div>
            <div >
                <ul className="hidden md:flex space-x-8"> 
                    {
                        navitems.map(({id,text}) =>(
                          <li  className='hover:scale-105 duraction-200 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            > {text}</Link>
                           </li>
                        ))
                    }
                </ul>
               <div onClick={()=>setmenu(!menu)} className='md:hidden'> {menu?< IoMdClose size={24}/>:<MdMenu size={24}/>}</div>
            </div>
        </div>
        {/* for mobile navbar */}
        {
            menu &&(
        <div className='bg-white'>
            <ul className='md:hidden flex flex-col items-center justify-center space-y-3 text-excel '>
            {
                        navitems.map(({id,text}) =>(
                          <li className='hover:scale-105 duraction-200 cursor-pointer font-semibold' key={id}> <Link to={text}
                          onClick={()=>setmenu(!menu)}
                          smooth={true}
                              duration={500}
                              offset={-70}
                              activeClass='active'
                          > {text}</Link></li>
                        ))
                    }
            </ul>
        </div>
           )
        }

    </div>
    </>
  )
}

export default Navbar