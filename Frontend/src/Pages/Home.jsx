import React from 'react'
import Layout from '../Components/Layout'
import bookmark from "../Images/bookmark.png"
import cardlogo from "../Images/cardlogo.png"
import blog1 from "../Images/blog1.png"
import blog2 from "../Images/blog2.png"
import arrowRight from "../Images/arrow-right.png"
import quote from "../Images/quotes.png"
import community from "../Images/community.png"
import banner from "../Images/banner.png"

const Home = () => {
  return (
    <Layout>
        <div className="contact-top bg-[#03302D]">
          <h1 className='text-center text-white text-3xl md:text-5xl font-semibold py-20'>Home</h1>
        </div>

        <div className="recent-crime w-[95vw] md:w-[85vw] mx-auto my-10">
          <div className="top">
            <h1 className='text-2xl md:text-4xl font-bold'>Recent Crimes Happened</h1>
            <div className="desc flex justify-between pt-2">
              <p className='font-light text-sm'>Stay informed and vigilant with our comprehensive data</p>
              <a className='text-[#309689]' href="">View all</a>
            </div>
          </div>
          <div className="btm">
            <div className="card mt-5  shadow-xl mx-auto py-5 px-5 rounded-xl">

              <div className="card-top flex items-center justify-between">
                <div className="updated bg-[#c8ece9] w-[100px] text-center py-1 rounded-xl text-[309689]">
                  Updated
                </div>
                <div className="icon">
                  <img src={bookmark} alt="" />
                </div>
              </div>



              <div className="card-mid  flex mt-5 gap-2 items-center">
                <div className="logo">
                  <img src={cardlogo} alt="" />
                </div>
                <div className="title">
                  <h1 className='font-bold text-lg'>Crime Reports Of 2023</h1>
                  <p className='font-light text-sm'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="card-btm mt-5 flex justify-end">
                <button className='bg-[#309689] text-white px-3 py-1 rounded-lg'>See More</button>
              </div>
            </div>

            <div className="card mt-5  shadow-xl mx-auto py-5 px-5 rounded-xl">

              <div className="card-top flex items-center justify-between">
                <div className="updated bg-[#c8ece9] w-[100px] text-center py-1 rounded-xl text-[309689]">
                  Updated
                </div>
                <div className="icon">
                  <img src={bookmark} alt="" />
                </div>
              </div>



              <div className="card-mid  flex mt-5 gap-2 items-center">
                <div className="logo">
                  <img src={cardlogo} alt="" />
                </div>
                <div className="title">
                  <h1 className='font-bold text-lg'>Crime Reports Of 2023</h1>
                  <p className='font-light text-sm'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="card-btm mt-5 flex justify-end">
                <button className='bg-[#309689] text-white px-3 py-1 rounded-lg'>See More</button>
              </div>
            </div>

            <div className="card mt-5  shadow-xl mx-auto py-5 px-5 rounded-xl">

              <div className="card-top flex items-center justify-between">
                <div className="updated bg-[#c8ece9] w-[100px] text-center py-1 rounded-xl text-[309689]">
                  Updated
                </div>
                <div className="icon">
                  <img src={bookmark} alt="" />
                </div>
              </div>



              <div className="card-mid  flex mt-5 gap-2 items-center">
                <div className="logo">
                  <img src={cardlogo} alt="" />
                </div>
                <div className="title">
                  <h1 className='font-bold text-lg'>Crime Reports Of 2023</h1>
                  <p className='font-light text-sm'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="card-btm mt-5 flex justify-end">
                <button className='bg-[#309689] text-white px-3 py-1 rounded-lg'>See More</button>
              </div>
            </div>

          </div>
        </div>

        <div className="crime-category my-10 bg-[#e2f6f3] ">

          <div className="top py-10">
            <h1 className='text-center text-5xl font-bold'>Browse by Crime Category</h1>
            <p className='text-center font-light pt-5'>Explore Crime Types and Patterns</p>
          </div>

          <div className="btm py-10 grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-0 gap-y-5 w-[85vw] mx-auto">

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

            <div className='card shadow-xl bg-white md:w-[20vw] flex flex-col items-center justify-center h-[30vh] rounded-xl'>
              <h1 className='text-xl font-bold'>MURDER</h1>
              <div className='bg-[#e2f6f3] mt-5 rounded-lg w-[50px] py-2 px-4'>
                20
              </div>
            </div>

          </div>
        </div>

        {/* Community */}
        <div className="community w-[85vw] mx-auto my-16">
          <div className="top flex flex-col md:flex-row">
            <div className="left md:w-[50%] md:h-[60vh]">
              <img className='md:w-[80%] md:h-[100%]' src={community} alt="" />
            </div>
            <div className="right md:w-[50%] flex flex-col justify-center mt-5">
              <h1 className='font-bold text-3xl'>Enhancing <br /> Community Safety <br /> Together</h1>
              <p className='mt-5'>In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. Our platform encourages open communication and reporting, empowering everyone to contribute </p>
              <div className="btns mt-5 space-x-4">
                <button className='bg-[#309689] text-white px-5 py-2 rounded-lg font-medium'>Search Crime</button>
                <a className='text-[#309689] underline font-medium' href="">Learn more</a>
              </div>
            </div>
          </div>

          <div className="btm flex justify-between mt-10">
            <div className="">
              <p className='text-[#309689] font-bold md:text-2xl'>12+</p>
              <h2 className='md:text-lg font-bold'>Crime Reporting</h2>
            </div>
            <div className="">
              <p className='text-[#309689] font-bold md:text-2xl'>200+</p>
              <h2 className='md:text-lg font-bold'>Active cases</h2>
            </div>
            <div className="">
              <p className='text-[#309689] font-bold md:text-2xl'>18+</p>
              <h2 className='md:text-lg font-bold'>Crime Areas </h2>
            </div>
          </div>
        </div>

        {/* Uniting for safety */}
        <div className="safety bg-[#000000] py-5 my-10 text-white w-[95vw] md:w-[85vw] mx-auto rounded-2xl flex flex-col-reverse md:flex-row items-center">
          <div className="left md:w-[35%] md:px-16 px-8 mt-3">
            <h1 className='font-bold text-xl md:text-3xl'>Uniting for Safety: <br className='hidden md:block' /> Your Portal to Crime Free Living</h1>
            <p className='py-4'>Insight into Neighborhood Security</p>
            <button className='bg-[#309689] text-white px-5 py-2 rounded-lg font-medium'>Search Crime</button>
          </div>
          <div className="right md:w-[65%] flex justify-center">
            <img className='md:w-[90%]' src={banner} alt="banner" />
          </div>
        </div>

        {/* News & Blogs */}
        <div className="news-blog w-[85vw] mx-auto ">
          <div className="top">
            <h1 className='text-3xl font-bold'>News and Blog Of Recent Crimes</h1>
            <p className='font-light py-2'>Crime in Karachi: What’s Happening Now?</p>
          </div>
          <div className="btm my-10 flex-col md:flex-row flex gap-5">
            <div className="card">
              <div className="card-top">
                <img src={blog1} alt="blog1" />
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


      </Layout>
  )
}

export default Home