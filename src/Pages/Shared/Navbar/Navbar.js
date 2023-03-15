import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {

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
            <Link to='/unlimited Design'>Unlimited Design</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/reviews'>Reviews</Link>
        </li>
        <li className='px-[15px] hover:text-secondary'>
            <Link to='/contact'>Contact</Link>
        </li>
    </React.Fragment>

    return (
        <div className='flex justify-between items-center px-[105px] pt-[36px]  mx-auto bg-primary text-white opacity-95'>
            <div className='pl-[15px]'>
                <Link to='/' className='text-base'><img src={logo} alt="" /></Link>
            </div>
            <div>
                <ul className='flex justify-end items-center text-[16px] font-medium capitalize'>
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;