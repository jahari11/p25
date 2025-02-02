import Logo from '../assets/25logo.png'
import WebIcon from '../assets/webicon.png'
import Image from 'next/image'
import Timeline from '@/components/Timeline'
import {FaInstagram} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { Card } from '@/components/Card'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import { useState } from 'react';
export default function Home () {

  const [showContactForm, setShowContactForm] = useState(false);
  
  return (
  <div className='min-h-screen bg-black px-4 md:px-6 lg:px-8 '>
    <header className='flex items-center justify-between px-4 py-4 mx-auto'>
      <div className='flex items-center'>
        <Image src={WebIcon} />
      </div>
      <div className='flex gap-4'>
      <a href='https://www.instagram.com/phoenixpro5ect'>
        <FaInstagram className='text-white hover:text-red-600 text-2xl' />
      </a>
      <MdEmail className='text-white hover:text-red-600 cursor-pointer text-2xl' onClick={()=> setShowContactForm(!showContactForm)} />
      </div>
    </header>

    {showContactForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg relative w-[90%] max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              onClick={() => setShowContactForm(false)}
            >
              ✕ {/* Close button */}
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    {/*Hero Content */}
    <div className='min-h-screen px-4'>
      <div className='max-w-4xl mx-auto text-center pt-16 pb-24'>
        <div className='flex justify-center mb-4'>
          <Image src={Logo} />
        </div>
      <h1 className=' text-6xl md:text-8xl font-bold mb-2 text-red-600 uppercase text-center'>Phoenix Project</h1>
      <h2 className='text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white uppercase'>I think therefore, I choose Phoenix Project</h2>
      <p className='text-xl text-white uppercase font-thin'>We craft digital experiences that spark growth, automate success, and position your business for the future.</p>
      </div>
    </div>

    {/*Page one Content */}
  <div className='relative min-h-screen snap-start bg-black'>
      <div>
        <h1 className='text-6xl md:text-[280px] leading-none font-bold tracking-tight text-red-600'>
          OUR SERVICES
        </h1>
      </div>
      <Card />
      </div>

{/*Page two Content */}
  <div className='min-h-screen relative bg-black'>
  
  <h1 className=" text-6xl text-red-600 font-bold  md:text-[280px] md:whitespace-nowrap text-right leading-none  ">
    OUR PROCESS
  </h1>
  
  <Timeline />
  </div>

  {/*Page 3 Content */}
  <div className='min-h-screen bg-black'>
    <h1 className='text-red-600 font-bold text-6xl md:text-[280px] leading-none whitespace-nowrap uppercase'>About Us</h1>
  <About />
  </div>
  </div>

  )
}