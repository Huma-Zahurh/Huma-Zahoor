import React from 'react'
import '../Styles/Expertise.css'
import img from '../Assets/choose.png'
import { FaDatabase } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { SiCpanel } from "react-icons/si";
import { DiGithubFull } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import Testimonial from './Testimonial';

const Expertise = () => {
    return (
        <div className='expertise' id='work-experience'>
            <div className='expertiseContainer section'>

                {/* Text */}
                <div className='expertiseText'>
                    <h5><em>●</em> Expertise</h5>
                    <h3>Why Choose Me</h3>
                    <p>Explore my work to leveraging in-depth research and client testimonials, my approach ensures quality and innovation in every project. With proven results and satisfied clients, I deliver tailored solutions that drive success.</p>
                </div>

                {/* Expertise Boxes */}

                <div className='expBoxContainer'>
                    {/* left Side */}
                    <div className='expertise'>

                        <div className='expBox'>
                            <h3>Web Services</h3>
                            <p> Explore my range of expertise that ensures your digital presence stands out. From crafting exceptional designs to optimizing performance, I cover all aspects to elevate your website.</p>

                            <ol>
                                <li>Craft Exceptional UI/UX Designs</li>
                                <li>Boost Your Online Visibility (SEO Optimized)</li>
                                <li>Maximize Website Speed (Speed Optimized)</li>
                                <li>Engage with Interactive Features</li>
                                <li>Responsive Design: Flawless Across All Devices</li>
                            </ol>

                        </div>

                        <div className='inerExpBoxContainer'>

                            <div className='expBox containerImgs'>
                                <div className='scrolling-Img'> 
                                    <div className='ImgBoxContainer'> 
                                        <div className='ImgBox'><FaDatabase /></div>
                                        <div className='ImgBox'><PiRankingFill /></div>
                                        <div className='ImgBox'><SiCpanel /></div>
                                        <div className='ImgBox'><DiGithubFull /></div>
                                        <div className='ImgBox'><DiNodejsSmall /></div>
                                        <div className='ImgBox'><FaDatabase /></div>
                                        <div className='ImgBox'><PiRankingFill /></div>
                                        <div className='ImgBox'><SiCpanel /></div>
                                        <div className='ImgBox'><DiGithubFull /></div>
                                        <div className='ImgBox'><DiNodejsSmall /></div>
                                    </div>
                                </div>
                            </div>

                            <div className='expBox expTestimonial'>
                                <h5>Client Testimonials</h5>
                                <p>Hear what my clients have to say about their experiences working with me. Their feedback is a testament to my dedication to delivering exceptional web development services.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className='expertise'>

                        <div className='expBox expImgBoxContain'>
                            <div>
                                <h3>Research</h3>
                                <p>My approach is rooted in thorough research and meticulous planning to ensure every project meets its goals. By understanding your needs and industry trends, I craft tailored solutions that drive success and innovation.</p>
                            </div>
                            <img className='' src={img} alt='Img' width={"110px"} />
                        </div>

                        <div className='expBox portfolioBoxContainer'>
                            <div className='scrolling-portfolio'>
                                <div className='CountBox'>
                                    <h6>90+</h6>
                                    <p>Happy Clients</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>100+</h6>
                                    <p>Projects Done</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>4+</h6>
                                    <p>Years Of Experience</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>3+</h6>
                                    <p>Companies Worked With</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>90+</h6>
                                    <p>Happy Clients</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>100+</h6>
                                    <p>Projects Done</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>4+</h6>
                                    <p>Years Of Experience</p>
                                </div>
                                <div className='CountBox'>
                                    <h6>3+</h6>
                                    <p>Companies Worked With</p>
                                </div>

                            </div>
                        </div>

                        <div className='expBox'>
                            <Testimonial />
                        </div>
                    </div>

                </div>


            </div>
        </div >
    )
}

export default Expertise
