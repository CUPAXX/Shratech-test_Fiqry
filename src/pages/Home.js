import React from 'react'
import CategoryItem from '../components/CategoryItem';
import {AiOutlineUser, BiSearchAlt, BiTrophy} from 'react-icons/all'
import companyLogo from '../assets/companyLogo.jpg'
import man1 from '../assets/man1.png'
import man2 from '../assets/man2.png'
import man3 from '../assets/man3.png'
export default function Home() {
  return (
    <div>
      {/* section start */}
      <section className="bg-home flex flex-col justify-center items-center gap-5">
        <div className="text-white font-bold text-3xl lg:text-7xl">Your Dream Come Here</div>
        <a href="#how-it-work" className="btn-login py-2 px-10 rounded-lg flex justify-center items-center text-white font-bold">Let's start</a>
      </section>

      {/* section features */}
      <section id="how-it-work" className="flex flex-col justify-center items-center py-24 mx-8 md:mx-16 pb-8">
        <div className="flex flex-col gap-3 pb-12 items-center text-center max-w-2xl">
          <h5 className="text-4xl font-semibold text-gray-800 tracking-wider">How It Works?</h5>
          <h5 className=" text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
            metus effici turac fringilla lorem facilisis.</h5>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col items-center gap-3 max-w-xs text-center">
            <AiOutlineUser size={45} color="#a6d2f5"/>
            <p className=" text-gray-600">Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
          </div>
          <div className="flex flex-col items-center gap-3 max-w-xs text-center">
            <BiSearchAlt size={45} color="#a6d2f5"/>
            <p className=" text-gray-600">Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
          </div>
          <div className="flex flex-col items-center gap-3 max-w-xs text-center">
            <BiTrophy size={45} color="#a6d2f5"/>
            <p className=" text-gray-600">Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
          </div>
        </div>
      </section>

      {/* section popular categories */}
      <section className="flex flex-col justify-center items-center py-24 mx-8 md:mx-16">
        <div className="flex flex-col gap-3 pb-12 text-center">
          <h5 className="text-4xl font-semibold text-gray-800 tracking-wider">Popular Categories</h5>
          <h5 className=" text-gray-400">More than 123 new jobs every day</h5>
        </div>
        <div className="flex flex-row gap-14 lg:gap-14 justify-center overflow-y-scroll md:max-w-2xl lg:max-w-max max-w-sm">
          <CategoryItem className=""/>
          <CategoryItem/>
          <CategoryItem/>
        </div>
      </section>

      {/* section patner */}
      <section className="grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-16 my-24 gap-8 justify-center items-center">
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold text-gray-700 text-center md:text-left">We Are Trusted by Popular Company</h4>
          <h5 className="text-3xl font-bold text-red-400 md:flex hidden">800+ Company</h5>
          <p className="text-gray-500 text-justify leading-10 lg:flex hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={companyLogo}  alt="company logo" className=" w-10/12"/>
        </div>
      </section>

      <section className="hidden md:flex flex-col justify-center items-center mx-8 md:mx-16 my-24">
        <h4 className=" text-4xl font-semibold pb-4 text-gray-700">Clients Review</h4>
        <p className=" max-w-xl text-center pb-10 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
            metus effici turac fringilla lorem facilisis.</p>
        <div class="slider text-center overflow-hidden">
          <div class="slides">
              <div id="slide-1" className="flex flex-col gap-5 p-4">
                <img src={man1} alt="man"/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim</h5>
              </div>
              <div id="slide-2" className="flex flex-col gap-5 p-4">
                <img src={man2} alt="man"/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim</h5>
              </div>
              <div id="slide-3" className="flex flex-col gap-5 p-4">
                <img src={man3} alt="man"/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim</h5>
              </div>
            </div>
            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
        </div>
      </section>
    </div>
  )
}
