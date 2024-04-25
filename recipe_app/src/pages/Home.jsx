import React from 'react'
import NavBar from '../components/common/NavBar'
import '../assets/CSS/Home.css';
import { Link } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";
import img from '../assets/r1.jpg'
import { data } from '../DummyData/dataa';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <>
    <NavBar/>
    <header className='banner w-full min-h-[85vh]'>
      <h4 className='text-4xl font-bold mb-5'>Our Recipes</h4>
      <Link to={'/recipes'} className='bg-[#1434A4] text-white px-4 py-2 rounded font-semibold hover:bg-white hover:border border-[#1434A4] hover:text-[#1434A4] duration-300'>Search Recipes</Link>
    </header>

    <main className='mt-5 mb-5'>
      <section className='summer pb-[30px]'>
        <div className='mb-5'>
          <h4 className='text-3xl text-center font-semibold text-[#1434A4]'>This Summer Recipes</h4>
          <p className='text-center text-[grey]'>We have all your independence Day sweets covered.</p>
        </div>

        <div className='max-w-[1180px] sm:p-0 p-3 w-full m-auto flex md:flex-nowrap flex-wrap sm:justify-between justify-center'>
          {
            data.SummerData.map((ele,ind)=>{
              return(
                <div key={ind} className='md:w-[16rem] sm:w-[18rem] w-full shadow-md rounded overflow-hidden'>
                <div className='w-full h-[170px]  mb-1 flex justify-center items-center'>
                  <img src={ele.img} alt='recipe-img' className='w-[100%] h-[100%]'/>
                </div>
                <div className='px-2 flex justify-between items-center mb-2'>
                  <h5 className='text-[14px] font-semibold '>{ele.title}</h5>
                  <div className='w-[1.8rem] h-[1.8rem] rounded-full border border-black flex flex-col justify-center items-center'>
                    <CiBookmark />
                  </div>
                </div>
                  <p className='ml-2 text-[#1434A4] text-[16px]'>{ele.time}</p>
              </div>
              )
            })
          }
         
          
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default Home