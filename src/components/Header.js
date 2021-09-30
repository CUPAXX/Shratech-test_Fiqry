import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/all'
import {Link} from 'react-router-dom'

export default function Header() {
  const [showMenu, setshowMenu] = useState(false)
  const ShowTrigger = () => {
    if(showMenu !== true){
      setshowMenu(true)
    } else {
      setshowMenu(false)
    }
  }
  return (
    <header className="headerTop flex flex-row md:mx-16 mx-8 my-8 justify-between items-center">
      <div>
        <h5 className=" text-lg md:text-2xl font-bold text-gray-700">My Job Seeker</h5>
      </div>

      <nav className="flex flex-row gap-8">
        <Link to="/" className=" text-lg font-semibold text-gray-700">Home</Link>
        <Link to="/list-job" className=" text-lg font-semibold text-gray-700">Find A Job</Link>
      </nav>
      {/* <div>
        <button onClick={ShowTrigger} className="md:hidden"><FaBars size={30} /></button>
      </div> */}
    </header>
  )
}
