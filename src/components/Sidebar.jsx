/* eslint-disable semi */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';
import lyrics3 from '../assets/lyrics3.webp';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-pink-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop menu */}
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#77017b]">
        <img src={lyrics3} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile menu - Icon to open the menu */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine onClick={() => { setMobileMenuOpen(false) }} className="w-6 h-6 text-white mr-2" />
        ) : <HiOutlineMenu onClick={() => { setMobileMenuOpen(true) }} className="w-6 h-6 text-white mr-2 " />}
      </div>

      <div className={` absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#115e3e] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
