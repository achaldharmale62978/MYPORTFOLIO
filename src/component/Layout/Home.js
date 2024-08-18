import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ImDownload } from "react-icons/im";
import '../Layout/home.css'
import imgone from '../../Assetss/Untitled design.png'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import portfolio from '../../Assetss/Screenshot 2024-08-07 171027.png'
import car from '../../Assetss/download.png'
import soap from '../../Assetss/WhatsApp Image 2024-08-05 at 22.25.37_1faa40ac.jpg'
import journey from '../../Assetss/1602676294527.png'


const Home = () => {
    return (
        <>
            <div className='backcolor m-2'>
                <Navbar />
                <div className='m-2'>
                    <div className='row align-items-center' >
                        <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                            <img src={imgone} className='img-fluid' alt='' />
                        </div>
                        <div className='col-12 col-md-5 0ffset-md-2 text-start mt-4 mt-md-0'>
                            <h2 className='a2'><i><b>
                                Hi, I'm Achal Dharmale <br />
                                I Tell Stories Through Code
                            </b></i></h2>
                            <h5 className='a3 font'>
                                As a Front-end Developer, I specialize in developing dynamic and responsive applications. motivates me to continuously learn and apply the latest advancements in the field.
                            </h5>
                        </div>
                    </div>
                </div>

                <div className='text-start ms-2 mb-5 mt-4'>
                    <a href='https://drive.google.com/file/d/1BCbs2stDqM9TONOoPQqyKXKbPwyOngAD/view?usp=drive_link'
                        className='btn btn-outline-success  fontsize fontfamily' style={{fontSize:'22px'}}>
                       <b><i> Resume </i></b><ImDownload />
                    </a>
                </div>


                <div className='col-12 col-md-5 0ffset-md-2 text-start mt-5 mt-md-0'>
                    <h2 className='a2'><i><b>
                        My Journey
                    </b></i></h2>
                </div>
                <div className='row align-items-center' >
                    <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                        <img src={journey} className='img-fluid' alt='' />
                    </div>
                    <div className='col-12  col-md-5 0ffset-md-2 text-start mt-4 mt-md-0'>
                        <p className='a2 font'>
                            Hello! My name is Achal Dharmale , and I am currently done my course which is React Front-end Developer in Jan 2024.
                        </p>
                        <p className='a font'>
                            My Journey to becoming a Website Developer began in Aug 2023, with the support of the Complete Java classNamees (CJC) in Pune . At that time , I only had a basic Knowladge of programming, but i continuously working on my self and get deeper Knowladge in programming. This decision marked the start of an incredible learning experience.
                        </p>
                        <p className='a3 font'>
                            I extensively utilized the resources provided in React Frontend Developer classNamees, which help me build a solid foundation in Website Development. Over time, I have honed My skills and now specialize in Reactjs. I am pround to say that I can independently create Website .
                        </p>
                        <p className='a3 font'>
                            Graduation : Bachelor of Bussiness Administration (BBA), AMT.<br />
                            Email: achaldharmale62978@gmail.com<br />
                            Location: Maharashtra,India
                        </p>
                        <p className='a3 font'>
                            <b> Technical Skills:</b>  
                            <ul>
                                <li className='font'>HTML</li>
                                <li className='font'>CSS</li>
                                <li className='font'>JavaScript</li>
                                <li className='font'>Reactjs</li>
                            </ul>
                        </p>
                    </div>
                </div>


                <div className='col-12 col-md-5 0ffset-md-2 text-start mt-4 mt-md-0'>
                    <h2 className='a2'><i><b>
                        Some of My Personal Projects
                    </b></i></h2>
                </div>
                <div className='row align-items-center' >
                    <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                        <img src={car} className='img-fluid' alt='Sweet Almond oil' />
                    </div>
                    <div className='col-12 col-md-5 0ffset-md-2 text-start mt-4 mt-md-0'>
                        <h2 className='a2'><i><b>Car Loan :</b></i></h2>
                        <h6>Github Actions</h6>
                        <ul className='font'>
                            <li>In this Car Loan project we provide the services to the clients about car and car loan</li>
                            <li>Clients can chek the loan Prosess and loan persentage with the help of this Website and after cheking everything they can login </li>
                            <li>Regional executive collect data of students and pass it to Operational executive</li>
                            <li>Collect data will be stored in database(MYSQL)</li>
                            <li>Only Operational executive has authority to approve the loan after cheking the cibil score</li>
                            <li>Finally Chief executive pass the loan and collect the other information from the person who want the loan</li>
                        </ul>
                    </div>
                </div>

                <div className='row align-items-center' >
                    <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                        <img src={soap} className='img-fluid' alt='Sweet Almond oil' />
                    </div>
                    <div className='col-12 col-md-5 0ffset-md-2 text-start mt-4 mt-md-0'>
                        <h2 className='a2'><i><b>Creamycuddle :</b></i></h2>
                        <h6>Github Actions</h6>
                        <ul className='font'>
                            <li>Creamycuddle is the Baby Soap which is made by Cammel Milk</li>
                            <li>The heart of cherished childhood memories, bath time was guided by "GrandMothers" age-old Recipes.</li>
                            <li>This product healpfull for baby skin. we use all natural products in this soap.</li>
                            <li>Collect data will be stored in database(MYSQL)</li>
                            <li>Only Operational executive has authority to approve the loan after cheking the cibil score</li>
                            <li>Finally Chief executive pass the loan and collect the other information from the person who want the loan</li>
                        </ul>
                    </div>
                </div>


                <div className='row align-items-center'>
                    <div className='col-12 col-md-5 offset-md-1 text-start mt-4 mt-md-0 '>
                        <h2 className='a2'><i><b>Portfolio :</b></i></h2>
                        <p className=" font  text-start ">
                            A simple portfolio website built using React js.
                            The dont, colours and overall design took me 3 design iterations and almost
                            month to finalize which was more than the actual time i took to fully develop and deploy it.
                        </p>
                    </div>
                    <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                        <img src={portfolio} className='img-fluid' alt='Jojoba Oil' />
                    </div>

                </div>

                <div className='col-12 col-md-5 0ffset-md-2 text-start mt-4 mt-md-0'>
                    <h4 className='a2'><i><b>
                        Contact Me
                    </b></i></h4>
                </div>
                <div className=' '>
                    <div className=' text-start'>
                        <h5 className='fontfamily '>Primary <br />
                            <span className='icone'><BiLogoGmail /> <a className='fontfamily'>achaldharmale62978@gmail.com</a> </span>
                        </h5>
                    </div>
                </div>
                <div className='mt-3  '>
                    <h5 className='fontfamily text-start'>Social</h5>
                    <div className=' text-start d-flex'>
                        <h5 className='me-3'><a href='https://www.linkedin.com/in/achal-dharmale-763344308.'><FaLinkedin /></a>
                            <span className='icone'></span>
                        </h5>
                        <h5 className='ms-3'>
                            <span className='icone'><FaGithub /></span>
                        </h5>

                    </div>
                </div>
                <div className=' mt-3 '>
                    <h5 className='fontfamily text-start'>Phone</h5>
                    <div className='d-flex '>
                        <h5 className=' text-start me-3'>
                            <span className='icone'><MdWifiCalling3 /></span>
                        </h5>
                        <h5 className=''>91+ 9657579844</h5>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Home