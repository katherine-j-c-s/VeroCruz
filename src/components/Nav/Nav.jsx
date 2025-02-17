import React, { useState , useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SlideDown } from '../Efectos/SlideDown/SlideDown'
import { NavItem } from './NavItem'
import logo from "../../assets/Logo.png"
import insta from "../../assets/instagramIcon.png"

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('/');
    const [showCursosSubMenu, setShowCursosSubMenu] = useState(false);

    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleCursosSubMenu = () => setShowCursosSubMenu(!showCursosSubMenu);

    useEffect(() => {
        setIsOpen(false);
        setShowCursosSubMenu(false);
        setActiveItem(location.pathname);
    }, [location]);

    const navItems = [
        { name: 'INICIO', href: '/' },
        { name: 'CURSOS', href: '/Cursos', subMenu: true },
        { name: 'NOSOTROS', href: '/Nosotros' },
        { name: 'VOUCHER', href: '/Voucher' },
        { name: 'BLOG', href: '/Blog' },
    ];

  return (
    <nav className={`top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r fixed from-[#EEB4CB] via-[#F6E2EA] via-[#FDF4F8] via-[#F6E2EA] to-[#EEB4CB] px-7 py-2`}>
        <div className='flex md:justify-around justify-between'> 
            {/* Logo */}
            <Link className='md:w-2/12 my-auto' to={'/'}><img src={logo} alt="logo" /></Link>
            
            {/* Desktop Menu */}
            <div className='hidden font-sans py-3 align-middle md:flex w-10/12 justify-end'>
                <div className="flex justify-center space-x-4">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative">
                            {item.subMenu ? (
                                <div className="relative">
                                    <button 
                                        onClick={toggleCursosSubMenu}
                                        className={`px-4 text-xs font-medium transition-colors duration-200 ${
                                            activeItem.startsWith(item.href) ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                    <div
                                        className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
                                            activeItem.startsWith(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    />
                                    <SlideDown isOpen={showCursosSubMenu}>
                                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <Link to="/curso/0" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">DISEÑO Y PERFILADO DE CEJAS</Link>
                                                <Link to="/curso/1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">EXTENSIÓN DE PESTAÑAS</Link>
                                            </div>
                                        </div>
                                    </SlideDown>
                                </div>
                            ) : (
                                <NavItem
                                    href={item.href}
                                    isActive={activeItem === item.href}
                                >
                                    {item.name}
                                </NavItem>
                            )}
                        </div>
                    ))}
                </div>
                <div className='w-2/5 flex justify-around'>
                    <a href="https://www.instagram.com/veronica0cruz?igsh=MWtqdzk2OXhydTJkMQ==" className='flex space-x-2'>
                        <img src={insta} className='w-4 m-auto h-4' alt="iconInstagram" />
                        <p className='m-auto text-black'>Instagram</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=2996214947" className='bg-white transition duration-500 ease-in-out translate-y-0 hover:-translate-y-1 shadow-md w-36 py-2 px-4'>
                        <p className='text-[#564757] text-sm'>Agendar Turno</p>
                    </a>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
                <svg className="w-6 text-white h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'max-h-screen ' : ' max-h-0'} w-screen h-screen flex justify-around flex-col mt-8 bg-white absolute left-0 overflow-hidden transition-all duration-300 ease-in-out`}>
                <ul className='flex flex-col w-full mx-auto space-y-8 '>
                    <li className='mx-auto'>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li className='mx-auto text-center'>
                        <button 
                            onClick={toggleCursosSubMenu}
                        >
                            Cursos
                        </button>
                        <SlideDown isOpen={showCursosSubMenu}>
                            <ul className="ml-4 mt-2 space-y-2">
                                <li><Link to="/curso/0" className="block px-4 py-2 text-sm text-gray-700 hover:text-pink-600">DISEÑO Y PERFILADO DE CEJAS</Link></li>
                                <li><Link to="/curso/1" className="block px-4 py-2 text-sm text-gray-700 hover:text-pink-600">EXTENSIÓN DE PESTAÑAS</Link></li>
                            </ul>
                        </SlideDown>
                    </li>
                    <li className='mx-auto'>
                        <Link to={'Voucher'}>Voucher</Link>
                    </li>
                    <li className='mx-auto'>
                        <Link to={'Nosotros'}>Nosotros</Link>
                    </li>
                    <li className='mx-auto'>
                        <Link to={'Blog'}>Blog</Link>
                    </li>
                </ul>
                <div className='w-auto flex flex-col mt-8 space-y-5'>
                    <a href="https://www.instagram.com/veronica0cruz?igsh=MWtqdzk2OXhydTJkMQ==" className='flex justify-center space-x-2'>
                        <img src={insta} className='w-4 my-auto h-4' alt="iconInstagram" />
                        <p className='m-auto'>Instagram</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=2996214947" className='bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] py-2 px-4 w-fit mx-auto'>
                        <p className='text-[#564757]'>Agendar Turno</p>
                    </a>
                </div>
            </div>
        </div>
        
        {/* 
        <ul>
            <li>
                <Link to={'/'}>Inicio</Link>
            </li>
            <li>
                <Link to={'Cursos'}>Cursos</Link>
            </li>
            <li>
                <Link to={'Voucher'}>Voucher</Link>
            </li>
            <li>
                <Link to={'About'}>Nosotros</Link>
            </li>
            <li>
                <Link to={'Blog'}>Blog</Link>
            </li>
        </ul>
        <div>
            <div>
                <img src={insta} alt="iconInstagram" />
                <p>Instagram</p>
            </div>
            <div>
                <p>Agendar Turno</p>
            </div>
        </div> 
        */}
    </nav>
  )
}
