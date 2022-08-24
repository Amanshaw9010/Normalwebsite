import React from 'react'
import '../css/about.css'


const About = () => {
  return (
    <>
   
      <div className="About_main">
        <div className="About_container">

          <div className="About_box">
            <h1 className='About_heading2'>Company Details</h1><br />
            <h2 className='About_heading3'>SAVITRI TRADE</h2><br />
            <h2>Company Founder : SAVITRI DEVI</h2>
            <h2>Company Co-founder : SURAJ KUMAR SHAW</h2><br /><br />
            <h3>Address : 51 LALJI SAHA STREET GORABAZAR <br /> DUM DUM CANTOMENT KOLKATA-700028.</h3>

        

          </div>

          <br /><br />

          <div className="About_box">
            <h1 className='About_heading'>Organic Spices</h1><br />
            <p className='About_para'>We are providing Hygenic Spices in all over kolkata. <br />
              Our Spices are pure organic and vegetarian</p><br />
            <a href="#" className='About_sociallink'>Facebook</a>
            <a href="#" className='About_sociallink'>Instagram</a>
            <a href="#" className='About_sociallink'>Whatapp</a><br />
            <h2 className='About_contact'>PHONE NO : **********</h2>
            <h2 className='About_contact'>TElPHONE NO : **********</h2>
          </div>
        </div>

      </div>


    </>
  )
}


export default About
