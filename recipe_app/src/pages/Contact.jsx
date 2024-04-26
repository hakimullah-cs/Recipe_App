import React from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import img from '../assets/contact.jpg'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  return (
    <>
    <NavBar/>
    <main className='py-5'>
      <section className='max-w-[1180px] w-full m-auto'>
          <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap md:p-0 p-3'>
           <div className='lg:w-[45%] md:w-[50%] w-full p-3'>
            <h3 className='text-4xl mb-2'>How can I help you? </h3>
            <p className='mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy voluptua. At vero eos et accusam et justo.</p>
             <div>
             <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          subject: Yup.string().required("Subject is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          // Handle form submission here, e.g., send data to server
          console.log(values);
          resetForm();
        }}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1">
              Subject
            </label>
            <Field
              id="subject"
              name="subject"
              type="text"
              className="w-fullborder border-gray-300 rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <Field
              id="message"
              name="message"
              as="textarea"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-black w-[150px] text-white px-4 py-3  hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
             </div>
           </div>
           <div className='lg:w-[45%] md:w-[50%] w-full overflow-hidden'>
            <img src={img} alt="contact-img" className='w-full h-[100%]' />
           </div>
          </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default Contact