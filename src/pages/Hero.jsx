/* eslint-disable no-unused-vars */
import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-screen flex'>
    <div className='left  w-[60%] h-screen overflow-y-scroll scroll-hide'>
      <h1>Live Surveillance: Anomaly Detection in Progress</h1>
      <div className="accessed-camera h-[45vh] w-[100%] flex justify-between flex-wrap">
        <div className="one h-[45vh] w-[45%] bg-amber-300"></div>
        <div className="two h-[45vh] w-[45%] bg-amber-300"></div>
      </div>
      <h1>Present Alerts</h1>
      <div className='container flex flex-wrap justify-center gap-[0.5%]'>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300">
        <h1>video 1</h1>
      </div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      <div className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-amber-300"></div>
      </div>
    </div>
    <div className="right w-[50%] flex items-center justify-center">
      <div className="container m-10  h-full w-full flex items-center justify-center bg-amber-300">
        <h1>Video </h1>
      </div>
    </div>
    </div>
  )
}

export default Hero