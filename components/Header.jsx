import { FaInstagram } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import Image from 'next/image';
import Logo from '../assets/25logo.png'

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-4 mx-auto bg-black">
        <div className="flex items-center">
          <Image src={Logo} width={300} height={300} alt="Phoenix Project Logo" />
          <span className="text-white font-extrabold lowercase">Phoenix Project</span>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/phoenixpro5ect">
            <FaInstagram className="text-white text-2xl" />
          </a>
          <MdEmail className="text-white text-2xl cursor-pointer" onClick={() => setShowContactForm(!showContactForm)} />
        </div>
      </header>
    )
}