import React from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../Images/Navlogo.png'

const Footer = () => {
  return (
<div className='footer bg-[#000000]'>
      <div className="sub-footer w-[90%] mx-auto text-white">
        <div className="footer-top md:h-[55vh] flex items-center">
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
            <div className='md:col-span-2'>
              <div className="logo my-5 md:mb-5">
                <img src={NavLogo} alt="logo" />
              </div>
              <p className="description leading-8">
                Our Crime Monitoring Portal provides real-time crime data and empowers citizens to report incidents. Together, we enhance public safety and foster community collaboration.
              </p>
            </div>
            <div>
              <h1 className='font-semibold text-xl'>Pages</h1>
              <ul className='mt-6 font-light space-y-4'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about_us"}>About Us</Link></li>
                <li><Link to={"/crime_report"}>Crime Reports</Link></li>
                <li><Link to={"/crime_response"}>Crime Responses</Link></li>
                <li><Link to={"/contact_us"}>Contact Us</Link></li>
              </ul>
            </div>
            <div >
              <h1 className='font-semibold text-xl'>Crime Categories</h1>
              <ul className='mt-6 font-light space-y-4'>
                <li>Murder</li>
                <li>Target Killing</li>
                <li>Bomb Blast</li>
                <li>High Way & Bank Robbery</li>
                <li>Snatching</li>
                <li>Gang Rape</li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h1 className='font-semibold text-xl'>Newsletter</h1>
              <p>Get Updates Of Latest Crimes</p>
              <input className='border bg-[#000000] border-gray-600 outline-none px-2 py-1 md:w-[18vw] rounded-lg' type="email" name="" id="" placeholder='Email'/>
              <br />
              <button className='bg-[#309689] px-10 md:w-[18vw] py-1 text-lg font-semibold rounded-lg'>Subscribe now</button>
            </div>
          </div>
        </div>

        <div className="footer-btm flex flex-col md:flex-row items-center md:justify-between py-8">

          <div className="footer-btm-left">
            <p className=' font-light'>© Copyright Crime Portal  2024. </p>
          </div>

          <div className="footer-btm-right flex space-x-6">
            <p className='underline cursor-pointer'>Privacy Policy</p>
            <p className='underline cursor-pointer'>Terms & Conditions</p>
          </div>

        </div>

      </div>

    </div>
)
}

export default Footer