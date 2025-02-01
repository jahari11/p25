import {FaInstagram} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import { Logo } from '../assets/25logo.png';
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
    const [showContactForm, setShowContactForm] = useState(false)
    return (
        <div className="bg-black px-4 py-16 flex flex-col items-center">
            <span className="text-white md:text-[30px] uppercase font-bold">Phoenix project 2025</span>
            <Image src={Logo} width={300} />
            <span className="text-red-600 font-bold uppercase md:text-[30px]">phoenixproject4you@gmail.com</span>
            <div className='flex gap-2'>
        <a href='https://www.instagram.com/phoenixpro5ect'>
        <FaInstagram className='text-white text-2xl hover:text-red-600' />
        </a>
        <MdEmail className='text-white text-2xl cursor-pointer hover:text-red-600' onClick={()=>setShowContactForm(!showContactForm)} />
        
            </div>
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
        </div>
    )
}