import React from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../Images/NavLogo.png'
import { HiMiniBars4 } from 'react-icons/hi2'

const Navbar = () => {

  const Token = localStorage.getItem("Token");
  const mblMenuHandler = () => {
    let mblNav = document.getElementById('mbl-nav');
    if (mblNav.classList.contains('hidden')) {
      mblNav.classList.remove('hidden');
    } else {
      mblNav.classList.add('hidden');
    }
  }

  const LogoutHandler = () => {
    localStorage.removeItem('Token');
    window.location.href = '/login'
  }
  return (
    <div>
      <div>
        <div className="navbar bg-[#03302D] flex items-center h-[10vh] md:h-[12vh]">
          <div className="sub-navbar flex items-center justify-between w-[95%] md:w-[90%] mx-auto">

            <div className="logo">
              <img src={NavLogo} alt="" />
            </div>

            <ul className="nav-items hidden md:flex text-white space-x-9 font-semibold text-lg">
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About Us</li></Link>
              <Link to="/crimereport"><li>Crime Reports</li></Link>
              <Link to="/crimeresponse"><li>Crime Response</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
            </ul>

            <div className="register-btns hidden md:block ">
              {
                Token ? (
                  <button onClick={LogoutHandler} className='bg-[#309689] text-white px-5 py-1 rounded-lg font-bold'>Logout</button>

                ) : (<div className='space-x-4'>
                  <Link to={'/login'} className='text-white font-semibold text-lg'>Login</Link>
                  <Link to={'/register'} className='bg-[#309689] text-white px-5 py-1 rounded-lg font-bold'>Register</Link>
                </div>
                )
              }


            </div>

            <div className="bars">
              <HiMiniBars4 onClick={mblMenuHandler} className='text-white block md:hidden text-2xl' />
            </div>

          </div>
        </div>

        <div id='mbl-nav' className="mbl-nav hidden bg-[#03302D] h-[45vh] w-[100vw]">
          <ul className="nav-items text-white space-y-5 font-semibold py-8 px-5 text-lg">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about_us"}>About Us</Link></li>
            <li><Link to={"/crime_report"}>Crime Reports</Link></li>
            <li><Link to={"/crime_response"}>Crime Response</Link></li>
            <li><Link to={"/contact_us"}>Contact Us</Link></li>
          </ul>

          <div className="register-btns px-5 block space-x-4">

            {/* <button  className='bg-[#309689] text-white px-5 py-1 rounded-lg font-bold'>Logout</button> : */}
            <div className='space-x-4'>
              <Link to={'/login'} className='text-white font-semibold text-lg'>Login</Link>
              <Link to={'/register'} className='bg-[#309689] text-white px-5 py-1 rounded-lg font-bold'>Register</Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar