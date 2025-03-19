import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <>
    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
        <div className='flex flex-col md:flex-row'> 
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a</h1>
        {/* <span className='text-red-700 font-bold '>Developer</span> */}
        <ReactTyped
          className='text-red-700 font-bold '
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'> Hello! My name is Jai Kumar, and I am an enthusiastic web developer. 
            I have a passion for creating interactive and user-friendly web applications using React,
             JavaScript, and other modern technologies. I have worked on various projects where I not only 
             honed my technical skills but also prioritized user experience. My goal is to stay updated with the 
             latest trends and best practices in the industry. I believe in collaborating with teams and sharing new ideas.
              In this portfolio, you will find some of my key projects and experiences. I hope you enjoy exploring my work, 
              and I look forward to the opportunity to contribute to your projects!</p> <br />
              {/* social media icons */}
             <div className='flex flex-col items-center  md:flex-row justify-between space-y-6 md:space-y-0'>
             <div className='space-y-2 '>
                <h1 className='font-bold text-center '>Available on</h1>
                <ul className='flex space-x-5'>
                <li>
                  {/* link dene ke liye */}
                  <a href="https://www.facebook.com/profile.php?id=100040832678411" target='black'>
                <FaFacebookF className='text-2xl cursor-pointer'/>
                </a>
                </li>
               
                <li>
                    <a href="https://www.linkedin.com/in/jai-kumar-55b8b024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>
                <FaLinkedin className='text-2xl cursor-pointer'/>
                </a>
                </li>
               <li>
                <a href="https://web.telegram.org/a/#5190844600" target='blank'>
               <FaTelegram className='text-2xl cursor-pointer'/> 
               </a>
               </li>  
               
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold text-center'>Currently Working on</h1>
                <ul className='flex space-x-5 '>
                <li>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                </li> 
                <li>
                <DiJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                </li> 
                </ul>
              </div>
             </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1'>
        <img src="/mypic.jpg" className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
        </div>
        
        <hr />
    </div>
    </>
  )
}

export default Home