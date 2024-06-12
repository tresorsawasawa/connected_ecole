import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

import styles from '../styles';
import { navLinks } from '../utils/data';
import Logo from '../assets/ConnectedLogo.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState('')
  
  const handleMenu = () => setToggle(!toggle);

  const handleCloseMenu = () => setToggle(!toggle);

  const style = () => {
    setActive('active')
  }

  console.log(style);  

  return (
    <header className={`${styles.paddingX} z-20`}>
      <nav className="navbar w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="logoContainer w-[5rem] h-[5rem]">
          <Link
            to="/"
            className=""
          >
            <img
              src={Logo} alt="Connected logo"
            />
          </Link>
        </div>

        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              onClick={handleCloseMenu}
              className={`${active === navLink.title ? 'text-primary' : 'text-secondary'} font-medium font-poppins text-[25px] cursor-pointer hover:text-white`}
              aria-hidden="true"
            >
              <Link
                to='/'
                className="text-primary"
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu sm:hidden flex flex-1 items-center justify-end">
          <div
            className="text-[2rem] cursor-pointer"
            aria-hidden="true"
            onClick={handleMenu}
          >
            {toggle ? <IoClose /> : <GiHamburgerMenu />}
          </div>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute bg-[#0d1117] bg-opacity-10 sm:relative top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="flex flex-col justify-end items-start gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  onClick={handleCloseMenu}
                  className={`${active === navLink.title ? 'text-primary' : 'text-secondary'} font-medium font-poppins text-[16px] cursor-pointer hover:text-white`}
                  aria-hidden="true"
                >
                  <Link
                    to='/'
                    className="text-primary"
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
