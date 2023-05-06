import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Navbar/Graphic-Idol-Logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = <React.Fragment>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/'>Home</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/services'>Services</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/pricing'>Pricing</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/blogs'>Blogs</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/reviews'>Reviews</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/contact'>Contact</Link>
        </li>
    </React.Fragment>
// 

    return (
        <div className="navbar bg-primary text-white bg-opacity-[.96] lg:bg-opacity-90 py-2  pt-[30px] lg:pt-[36px] pl-0 lg:pl-[120px] pr-0 lg:pr-[107px]">
            <div className="navbar-start  pl-[15px] lg:pl-0">
                <Link to='/'><img src={logo} alt="Graphic Idol logo" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="hidden lg:flex justify-end items-center text-[16px] font-medium capitalize">
                    {menuItems}
                </ul>
            </div>
            <div className="dropdown navbar-end flex lg:hidden">
                <label tabIndex={0} className="pr-[15px] lg:hidden">
                    <div onClick={toggleMenu} className='bg-[#FF4040] w-[32px] h-[32px] rounded-[3px] flex items-center justify-center'>
                        {
                            isOpen ? <ImCross size={20} /> : <GiHamburgerMenu size={20} />
                        }
                    </div>
                </label>
                {
                    isOpen && (
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content top-[35px] mt-3  shadow bg-white text-black  w-screen pr-0 text-[16px] font-medium capitalize">
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/portfolio'>Portfolio</Link>
                            </li>
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/pricing'>Pricing</Link>
                            </li>
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/blogs'>Blogs</Link>
                            </li>
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/reviews'>Reviews</Link>
                            </li>
                            <li className='pl-[15px] hover:bg-secondary hover:text-white'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;
