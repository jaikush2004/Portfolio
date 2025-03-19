import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram , FaInstagram} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <hr />
  <footer className='py-12'>
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
    <div className='flex flex-col items-center justify-center '>
        <div  className='flex space-x-4'> 
        <ul className='flex space-x-5'>
            <li> 
                <a href="https://www.facebook.com/profile.php?id=100040832678411" target='black'>
                <FaFacebook size={24}/>
                </a>
            </li>
            <li> 
            <a href="https://www.linkedin.com/in/jai-kumar-55b8b024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>
                <FaLinkedin size={24}/>
                </a></li>
            <li> 
            <a href="https://web.telegram.org/a/#5190844600" target='blank'>
                <FaTelegram size={24}/>
                </a></li>
            <li>
            <a href="https://www.instagram.com/j_a_i_06?igsh=czE3MmxldjZ4eDA1" target='blank'>
                <FaInstagram size={24}/>
                </a></li>
                </ul>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
<p className='text-sm'>&copy; 2025 Your Company. All rights reserved.</p>
<p className='text-sm'>Supportive Partner Jai</p>
        </div>
        </div> 


    </div>
  </footer>
    </>
  )
}

export default Footer