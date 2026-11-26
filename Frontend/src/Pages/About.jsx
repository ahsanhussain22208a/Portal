import React from 'react'
import Layout from '../Components/Layout'
import aboutBg from "../Images/aboutbg.png"
import tick from "../Images/tick.png"
import register from "../Images/register.png"
import crime from "../Images/crime.png"
import bcase from "../Images/bcase.png"
import aboutaftermid from "../Images/aboutaftermid.png"
import crown from "../Images/crown.png"
import mask from "../Images/mask.png"
import star from "../Images/star.png"
import badge from "../Images/badge.png"
import env1 from "../Images/env1.png"
import env2 from "../Images/env2.png"
import env3 from "../Images/env3.png"
import blog1 from "../Images/blog1.png"
import blog2 from "../Images/blog2.png"
import arrowRight from "../Images/arrow-right.png"
const About = () => {
  return (
     <Layout>
        <div className="about-top bg-[#03302D]">
          <h1 className='text-center text-white text-3xl md:text-5xl font-semibold py-20'>About Us</h1>
        </div>

        <div className="about-after-top my-10">

          <div className="top w-[85vw] mx-auto flex flex-col md:flex-row">

            <div className="left md:w-[30%]">
              <h1 className='text-2xl md:text-4xl font-bold'>What <span className='text-[#027768]'>We Do?</span></h1>
            </div>

            <div className="right md:w-[68%]">
              <p className='text-[#027768] text-md md:text-xl md:font-bold'>We deliver advanced monitoring solutions for comprehensive crime management. Our platform empowers communities with crime data insights, enabling proactive crime complaints and responses. Stay ahead of threats and protect your community.</p>
            </div>

          </div>
          <div className="btm mt-16 w-[85vw]  mx-auto">
            <img className='' src={aboutBg} alt="" />
          </div>

        </div>

        {/* About Mid */}
        <div className="about-mid">
          <div className="mid-top w-[90vw] mx-auto">
            <div className='desc flex flex-col items-center'>
              <h1 className='text-center text-2xl md:text-4xl font-bold'>How it works</h1>
              <div className='md:w-[12vw] w-[20vw] h-[3px] my-5 bg-[#309689]' ></div>
              <p className='text-center font-light'>Discover how to effectively use our portal to report crimes, respond to incidents, and access valuable crime statistics in Karachi.</p>
            </div>
          </div>
          <div className="mid-btm w-[82vw] mx-auto my-10">

            <div className="cards grid grid-cols-1 md:grid-cols-4 gap-4">

              <div className="card px-5 cursor-pointer rounded-lg shadow-lg md:w-[20vw] flex flex-col items-center h-[100%] py-10 justify-center">
                <div className="icon">
                  <img src={register} alt="register" />
                </div>
                <div className="desc">
                  <h1 className='text-center text-xl font-bold'>Register or Login</h1>
                  <p className='text-center text-light'>Create an account or log in to access our features.</p>
                </div>
              </div>
              
              <div className="card  px-5 cursor-pointer rounded-lg shadow-lg md:w-[20vw] flex flex-col items-center h-[100%] py-10 justify-center">
                <div className="icon">
                  <img src={crime} alt="register" />
                </div>
                <div className="desc">
                  <h1 className='text-center text-xl font-bold'>Report Crime</h1>
                  <p className='text-center text-light'>Easily register your complaint and report crimes through our intuitive interface.</p>
                </div>
              </div>

              <div className="card  px-5 cursor-pointer rounded-lg shadow-lg md:w-[20vw] flex flex-col items-center h-[100%] py-10 justify-center">
                <div className="icon">
                  <img src={bcase} alt="register" />
                </div>
                <div className="desc">
                  <h1 className='text-center text-xl font-bold'>Response to Crimes</h1>
                  <p className='text-center text-light'>Engage with the community by responding to crime reports and sharing information.</p>
                </div>
              </div>

              <div className="card  px-5 cursor-pointer rounded-lg shadow-lg md:w-[20vw] flex flex-col items-center h-[100%] py-10 justify-center">
                <div className="icon">
                  <img src={tick} alt="register" />
                </div>
                <div className="desc">
                  <h1 className='text-center text-xl font-bold'>View Crime Statistics</h1>
                  <p className='text-center text-light'>Access detailed crime statistics and insights specific to Karachi.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* About After mid */}
        <div className="about-after-mid w-[85vw] mx-auto">

          <div className="top">
              <img className='md:w-[85vw] md:h-[85vh]' src={aboutaftermid} alt="aboutaftermid" />
          </div>

          <div className="btm my-10 flex md:flex-row flex-col items-center">

            <div className="left md:w-[50%]">
              <div className='grid grid-cols-2 gap-4 md:gap-0'>
                <div>
                  <img className='md:w-[85%]' src={env1} alt="" />
                </div>
                <div>
                  <div>
                    <img className='md:w-[85%]' src={env2} alt="" />
                  </div>
                  <div className='mt-2 md:mt-5'>
                    <img className='md:w-[85%]' src={env3} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="righ md:w-[50%] mt-10 md:mt-0">
              <div className="top">
                <h1 className='text-3xl font-bold'>Enhancing Community</h1>
                <h1 className='text-[#309689] text-3xl font-bold'>Safety Together</h1>
                <p className='font-light'>In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. </p>
              </div>
              <div className="btm grid grid-cols-2 mt-6">

                  <div className="card flex items-center gap-2 mb-5">
                    <div className="badge bg-[#309689] px-2 py-2 rounded-lg">
                      <img className='w-[30px]' src={crown} alt="crown" />
                    </div>
                    <div className="desc">
                      <h1 className='font-bold'>Safe & Secure Community</h1>
                    </div>
                  </div>

                  <div className="card flex items-center gap-2 mb-5">
                    <div className="badge bg-[#309689] px-2 py-2 rounded-lg">
                      <img className='w-[30px]' src={mask} alt="crown" />
                    </div>
                    <div className="desc">
                      <h1 className='font-bold'>Registering Complaints</h1>
                    </div>
                  </div>

                  <div className="card flex items-center gap-2">
                    <div className="badge bg-[#309689] px-2 py-2 rounded-lg">
                      <img className='w-[30px]' src={star} alt="crown" />
                    </div>
                    <div className="desc">
                      <h1 className='font-bold'>Response Optimization</h1>
                    </div>
                  </div>

                  <div className="card flex items-center gap-2">
                    <div className="badge bg-[#309689] px-2 py-2 rounded-lg">
                      <img className='w-[30px]' src={badge} alt="crown" />
                    </div>
                    <div className="desc">
                      <h1 className='font-bold'>Predictive Policing Solutions</h1>
                    </div>
                  </div>


              </div>
            </div>
          </div>

        </div>

        {/* News & Blog  */}
        <div className="blog w-[85vw] mx-auto">

          <div className="top">
          <div className='desc flex flex-col items-center'>
              <h1 className='text-center text-2xl md:text-4xl font-bold'>News and Blog</h1>
              <div className='md:w-[12vw] w-[20vw] h-[3px] my-5 bg-[#309689]' ></div>
              <p className='text-center font-light'>Crime in Karachi: What’s Happening Now?</p>
            </div>
          </div>

          <div className="btm">

            <div className="cards my-10 flex gap-5">

              <div className="card">
                <div className="card-top">
                  <img  src={blog1} alt="blog1" />
                </div>
                <div className="card-btm mt-2">
                  <p className='text-lg font-semibold'>24 Jan</p>
                  <h1 className='text-xl font-bold'>Lyari gang war criminals among 25 arrested in Karachi</h1>
                  <p className='flex text-[#309689] items-center mt-3 font-bold'>Read more <img src={arrowRight} alt="" /></p>
                </div>
              </div>

              <div className="card">
                <div className="card-top">
                  <img src={blog2} alt="blog1" />
                </div>
                <div className="card-btm mt-2">
                  <p className='text-lg font-semibold'>24 Jan</p>
                  <h1 className='text-xl font-bold'>Lyari gang war criminals among 25 arrested in Karachi</h1>
                  <p className='flex text-[#309689] items-center mt-3 font-bold'>Read more <img src={arrowRight} alt="" /></p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </Layout>
  )
}

export default About