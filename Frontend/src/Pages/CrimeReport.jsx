import React from 'react'
import Layout from '../Components/Layout'
import bookmark from "../Images/bookmark.png"
import cardlogo from "../Images/cardlogo.png"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Line } from "react-chartjs-2";

Chart.register(CategoryScale);

// Sample data used only to drive the UI/charts (no backend calls)
const samplePosts = [
  { region: "South", category: "Target Killing" },
  { region: "North", category: "Snatching" },
  { region: "West", category: "Bomb Blast" },
  { region: "East", category: "Murder" },
  { region: "South", category: "Roberry" },
];
const sampleUsersCount = 128;
const sampleAllPostsCount = 342;
const CrimeReport = () => {
      const posts = samplePosts;

  const s = posts.filter((data) => data.region === "South");
  const n = posts.filter((data) => data.region === "North");
  const w = posts.filter((data) => data.region === "West");
  const e = posts.filter((data) => data.region === "East");

  const tk = posts.filter((data) => data.category === "Target Killing");
  const bb = posts.filter((data) => data.category === "Bomb Blast");
  const mr = posts.filter((data) => data.category === "Murder");
  const sn = posts.filter((data) => data.category === "Snatching");
  const rb = posts.filter((data) => data.category === "Roberry");



  const pieData = {
    labels: ['South', 'East', 'West', 'North'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [s.length, e.length, w.length, n.length],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(0,255,0, 0.6)',
          'rgba(0, 0, 255, 0.6)',
          'rgba(120, 0, 120, 0.6)',
        ],
        borderWidth: 1,
      }
    ]
  }

  const lineData = {
    labels: ['', 'Target Killing', 'Snatching', 'Bomb blast', 'Murder', 'Robbery'],

    datasets: [
      {
        label: 'Crime Rate Of All Categories',
        data: [0, tk.length, sn.length, bb.length, mr.length, rb.length],

        backgroundColor: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(0,255,0, 0.6)',
          'rgba(0, 0, 255, 0.6)',
          'rgba(160, 0, 255, 0.6)',
          'rgba(0, 160, 255, 0.6)',
          'rgba(50, 50, 255, 0.6)',
        ],
        borderWidth: 1,
      }
    ]
  }
  return (
      <Layout>

        <div className="crime-reports-top bg-[#03302D]">
          <h1 className='py-20 text-3xl font-semibold text-center text-white md:text-5xl'>Crime Reports</h1>
        </div>

        <div className="mid w-[90vw] mx-auto my-10">
          <div className="cards">

            <div className="card mt-5 w-[90%] shadow-xl mx-auto py-5 px-5 rounded-xl">

              <div className="flex items-center justify-between card-top">
                <div className="updated bg-[#c8ece9] w-[100px] text-center py-1 rounded-xl text-[309689]">
                  Updated
                </div>
                <div className="icon">
                  <img src={bookmark} alt="" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 card-mid">
                <div className="logo">
                  <img src={cardlogo} alt="" />
                </div>
                <div className="title">
                  <h1 className='text-lg font-bold'>Crime Reports Of 2023</h1>
                  <p className='text-sm font-light'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="flex justify-end mt-5 card-btm">
                <button className='bg-[#309689] text-white px-3 py-1 rounded-lg'>See More</button>
              </div>
            </div>

            <div className="card mt-5 w-[90%] shadow-xl mx-auto py-5 px-5 rounded-xl">

              <div className="flex items-center justify-between card-top">
                <div className="updated bg-[#c8ece9] w-[100px] text-center py-1 rounded-xl text-[309689]">
                  Updated
                </div>
                <div className="icon">
                  <img src={bookmark} alt="" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 card-mid">
                <div className="logo">
                  <img src={cardlogo} alt="" />
                </div>
                <div className="title">
                  <h1 className='text-lg font-bold'>Crime Reports Of 2023</h1>
                  <p className='text-sm font-light'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="flex justify-end mt-5 card-btm">
                <button className='bg-[#309689] text-white px-3 py-1 rounded-lg'>See More</button>
              </div>
            </div>

            <div className="card mt-5 w-[90%] shadow-xl mx-auto py-5 px-5 rounded-xl">

              <div className="flex items-center justify-between card-top">
                <div className="updated bg-[#c8ece9] w-[100px] text-center py-1 rounded-xl text-[309689]">
                  Updated
                </div>
                <div className="icon">
                  <img src={bookmark} alt="" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 card-mid">
                <div className="logo">
                  <img src={cardlogo} alt="" />
                </div>
                <div className="title">
                  <h1 className='text-lg font-bold'>Crime Reports Of 2023</h1>
                  <p className='text-sm font-light'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="flex justify-end mt-5 card-btm">
                <button className='bg-[#309689] text-white px-3 py-1 rounded-lg'>See More</button>
              </div>
            </div>

          </div>
        </div>

        <div className="linechart w-[80vw] mx-auto">
          <h1 className='py-2 text-5xl font-bold text-center'>Crime Statistics</h1>
          <p className='font-light text-center'>Our portal delivers dynamic crime statistics, offering insights into registered complaints such as robberies, snatchings, bomb blasts, gang rapes, and more.</p>
          <Line
            data={lineData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Crime Rate Of All District"
                }
              }
            }}
          />
        </div>

        <div className="piechart grid md:grid-cols-2 w-[80vw] mx-auto md:mx-0 my-10">
          <div className="left w-[50%] mx-auto md:h-[50vh]">
            <Pie
              data={pieData}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Users Gained between 2016-2020"
                  }
                }
              }}
            />
          </div>
         

         <div className="cards grid md:grid-cols-3 gap-y-4 md:gap-y-0  mx-auto gap-x-6 mt-5 md:mt-16">
          <div className="shadow card flex flex-col items-center justify-center w-[180px] h-[200px] rounded-xl shadow-gray-300">
            <h1 className='text-2xl font-medium'>Users</h1>
            <p className='text-lg font-medium'>{sampleUsersCount}</p>
          </div>
          <div className="shadow card flex flex-col items-center justify-center w-[180px] h-[200px] rounded-xl shadow-gray-300">
          <h1 className='text-2xl font-medium'>Posts</h1>
          <p className='text-lg font-medium'>{sampleAllPostsCount}</p>
          </div>
          <div className="shadow card flex flex-col items-center justify-center w-[180px] h-[200px] rounded-xl shadow-gray-300">
          <h1 className='text-2xl font-medium'>Comments</h1>
          <p className='text-lg font-medium'>45</p>
          </div>
         </div>

        </div>

      </Layout>
  )
}

export default CrimeReport