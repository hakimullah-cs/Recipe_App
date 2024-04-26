import React from 'react'
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import img from '../assets/about.jpg'
import photo from '../assets/about2.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <NavBar/>
    <main className='py-5'>
      <section className='max-w-[1140px] w-full m-auto min-h-[80vh] overflow-hidden mb-3'>
        <img src={img} alt="about-img" className='w-full h-[100%]' />
      </section>

      <section className='max-w-[1080px] w-full m-auto'>
        <h3 className='text-4xl text-center'>I’m Hannah Wilson, a nutrition consultant and award winning author.</h3>
        <p className='text-center mt-3 font-semibold mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

        <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap'>
          <div className='md:w-[48%] w-full px-3 '>
            <h3 className='text-3xl'>How I work </h3>
            <p className='text-justify mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
            <p className='text-justify mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>

            <h3 className='text-3xl'>How we can work together  </h3>
            <p className='text-justify mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
            <div className='pl-3 mt-3 border-l border-cyan-900 mb-5'>
              <h3 className='text-2xl'>“You don’t need another excuse. Take charge of your life and experience the difference keeping your body at its best.”</h3>
            </div>
            <p className='text-justify mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
          </div>
          <div className='md:w-[48%] w-full px-3'>
            <div className='w-full h-[300px] overflow-hidden mb-5 '>
              <img src={photo} alt="" className='w-full h-[100%]' />
            </div>
            <h3 className='text-3xl mb-2'>How I stay energized and well </h3>
            <p className='text-justify mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum..</p>

            <p className='text-justify mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore een, no sea takimata sanctus est.</p>
          </div>
        </div>
      </section>

      <section className='mt-[5rem] max-w-[1140px] w-full m-auto'>
        <div className='md:w-[45%] w-full p-3'>
          <h3 className='text-3xl mb-3'>If you’re ready to change your relationship with food for the better, follow me @healthfirst for daily meal plans and updates.</h3>
          <p className='mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
          <Link
            to={'/contact'}
            className="bg-black text-2xl text-center  block w-[150px] text-white px-4 py-3  hover:bg-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default About