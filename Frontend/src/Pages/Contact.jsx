import React, { useState } from 'react'
import Layout from '../Components/Layout'
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Contact = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const addFeedback = async (e) => {
    e.preventDefault()
    if (!fname.trim() || !lname.trim() || !email.trim() || !message.trim()) {
      toast.error("Please Fill All Fields");
    }
    let res = await axios.post('http://Localhost:4000/api/contact/feedback', {
      fname: fname,
      lname: lname,
      email: email,
      message: message
    })
    if (res.status === 200) {
      toast.success("Feedback Submitted Successfully");
      setFname("");
      setLname("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <Layout>
      <ToastContainer />
      <div className="contact-top bg-[#03302D]">
        <h1 className='text-center text-white text-3xl md:text-5xl font-semibold py-20'>Contact Us</h1>
      </div>

      <div className="contact-mid my-10 flex flex-col md:flex-row items-center justify-between w-[90vw] mx-auto">

        <div className="contact-mid-left md:w-[60%]">
          <h1 className='text-4xl font-bold'>CONNECT WITH US</h1>
          <h1 className='text-2xl font-semibold'>STAY INFORMED, STAY SAFE</h1>
          <p className='font-light'>For immediate assistance or to report a crime, please use our online portal.</p>
          <div className="cards my-5 grid grid-cols-2 gap-1">

            <div className="card my-4">
              <div>
                <IoCallOutline className='text-[#309689] text-3xl ' />
                <h1 className='py-2 text-xl md:text-2xl font-semibold md:font-bold'>Call for inquiry</h1>
                <p className='text-xl font-semibold'>+92 ----------</p>
              </div>
            </div>

            <div className="card my-4">
              <div>
                <FaRegEnvelope className='text-[#309689] text-3xl ' />
                <h1 className='py-2 text-xl md:text-2xl font-semibold md:font-bold'>Send us email</h1>
                <p className='text-xl font-semibold'>crimeportal.com</p>
              </div>
            </div>

            <div className="card my-4">
              <div>
                <FiClock className='text-[#309689] text-3xl ' />
                <h1 className='py-2 text-xl md:text-2xl font-semibold md:font-bold'>Service</h1>
                <p className='text-xl font-semibold'>24/7</p>
              </div>
            </div>

            <div className="card my-4">
              <div>
                <CiLocationOn className='text-[#309689] text-3xl ' />
                <h1 className='py-2 text-xl md:text-2xl font-semibold md:font-bold'>Location</h1>
                <p className='text-xl font-semibold'>Karachi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-mid-right w-[100%] md:w-[40%] bg-[#EBF5F4] h-[68vh] md:h-[75vh] rounded-lg ">
          <h1 className='text-center text-3xl font-bold py-10'>Contact Info</h1>
          <div className="contact-form px-3 md:px-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <div className='inp'>
                <label className='font-bold' htmlFor="">First Name</label>
                <br />
                <input value={fname} onChange={(e) => setFname(e.target.value)} className='md:w-[95%] w-[97.5%] px-2 py-1 my-1 outline-none rounded-lg' type="text" placeholder='Your Name' />
              </div>
              <div className='inp'>
                <label className='font-bold' htmlFor="">Last Name</label>
                <br />
                <input value={lname} onChange={(e) => setLname(e.target.value)} className='md:w-[95%] w-[97.5%] px-2 py-1 my-1 outline-none rounded-lg' type="text" placeholder='Your Last Name' />
              </div>
            </div>
            <div className='inp'>
              <label className='font-bold' htmlFor="">Email Address</label>
              <br />
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-[97.5%] px-2 py-1 my-1 outline-none rounded-lg' type="text" placeholder='Your Email Address' />
            </div>
            <div className='inp'>
              <label className='font-bold' htmlFor="">Message</label>
              <br />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-[97.5%] px-2 py-1 my-1 outline-none rounded-lg h-[20vh]' type="text" placeholder='Your Message' />
            </div>
            <div className='inp'>
              <button onClick={addFeedback} className='bg-[#309689] text-white px-10 py-1 rounded-lg font-semibold text-lg'>Send Message</button>
            </div>
          </div>
        </div>

      </div>

      <div className="contact-btm w-[90vw] mx-auto mb-10">
        <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9024867479634!2d67.02166607442994!3d24.867179844990453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6b1566c46f%3A0x65318f4eb62c7aa8!2sAptech%20Computer%20Education%20Garden%20Center!5e0!3m2!1sen!2s!4v1728276334584!5m2!1sen!2s" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </Layout>
  )
}

export default Contact