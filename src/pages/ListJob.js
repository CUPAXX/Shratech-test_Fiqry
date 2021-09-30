import React from 'react'

import {BiSearchAlt} from 'react-icons/all'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import pinterest from '../assets/pinterest.png'

export default function ListJob() {
  return (
    <div>
      <section className="my-16 md:my-24 mx-4 md:mx-16">
      <div className="bg-gray-50 flex items-center mx-5 md:mx-24 rounded-full shadow-xl">
        <input className=" bg-gray-50 rounded-l-full w-full  py-4 px-4 md:px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>   
        <select className="bg-gray-50 md:text-base text-xs" value="product name" id="sort">
          <option className="md:text-base text-xs" value="productName">A - Z</option>
          <option className="md:text-base text-xs" value="price">Z - A</option>
        </select>

        <div className="p-2 md:p-4">
          <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-400 focus:outline-none md:w-12 w-8 md:h-12 h-8 flex items-center justify-center">
          <BiSearchAlt size={25}/>
          </button>
        </div>
      </div>
    </section>
    <section className="md:my-24 my-12 md:mx-16 mx-5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between items-center bg-gray-100 py-5 px-6 md:px-10 rounded-xl shadow-xl">
          <img src={facebook} className="md:w-24 w-12 md:h-24 h-12" alt="fb"></img>
          <h4 className="text-lg md:text-xl font-bold">UI / UX Designer</h4>
          <h5 className="md:flex hidden">Facebook.inc</h5>
          <h5 className="md:flex hidden">3 Hours ago</h5>
          <div className=" btn-login py-2 px-6 rounded-lg flex justify-center items-center text-white font-bold text-sm cursor-pointer">
            Detail
          </div>
        </div>
        <div className="flex flex-row justify-between items-center bg-gray-100 py-5 px-6 md:px-10 rounded-xl shadow-xl">
          <img src={pinterest} className="md:w-24 w-12 md:h-24 h-12" alt="fb"></img>
          <h4 className="text-lg md:text-xl font-bold">UI / UX Designer</h4>
          <h5 className="md:flex hidden">Pinterest.co</h5>
          <h5 className="md:flex hidden">3 Hours ago</h5>
          <div className=" btn-login py-2 px-6 rounded-lg flex justify-center items-center text-white font-bold text-sm cursor-pointer">
            Detail
          </div>
        </div>
        <div className="flex flex-row justify-between items-center bg-gray-100 py-5 px-6 md:px-10 rounded-xl shadow-xl">
          <img src={facebook} className="md:w-24 w-12 md:h-24 h-12" alt="fb"></img>
          <h4 className="text-lg md:text-xl font-bold">UI / UX Designer</h4>
          <h5 className="md:flex hidden">Facebook.inc</h5>
          <h5 className="md:flex hidden">3 Hours ago</h5>
          <div className=" btn-login py-2 px-6 rounded-lg  justify-center items-center text-white font-bold text-sm cursor-pointer">
            Detail
          </div>
        </div>
        <div className="flex flex-row justify-between items-center bg-gray-100 py-5 px-6 md:px-10 rounded-xl shadow-xl">
          <img src={instagram} className="md:w-24 w-12 md:h-24 h-12" alt="fb"></img>
          <h4 className="text-lg md:text-xl font-bold">UI / UX Designer</h4>
          <h5 className="md:flex hidden">Instagram</h5>
          <h5 className="md:flex hidden">3 Hours ago</h5>
          <div className=" btn-login py-2 px-6 rounded-lg  justify-center items-center text-white font-bold text-sm cursor-pointer">
            Detail
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center mb-20 mx-16">
      <div className=" btn-login py-3 px-20 rounded-lg cursor-pointer justify-center items-center text-white font-bold text-sm">
              Load More
      </div>
    </div>
    </div>
  )
}
