import React from 'react'
import img from '../Assets/image.jpg'
import Topbar from '../Components/Topbar'
import '../Styles/Home.css'
import Header from '..//Components/Layout/Header'
import about from '../Assets/baner.png'
import SkillService from '../Components/SkillService'
import Expertise from '../Components/Expertise'
import Portfolio from '../Components/Portfolio'
import Cta from '../Components/Cta'
import Footer from '../Components/Layout/Footer'
import { Link } from 'react-scroll'
import AnimatedSection from '../Components/AnimatedSection'
import FadeInUp from '../Components/FadeInUp'

const Svgimg = () => {


    return (
        <div>
            <div className="">
                <AnimatedSection>
                    <Topbar />
                </AnimatedSection>
                <div className='container'>

                    {/* Hero Section  and About Section*/}
                    <div className='full_hero_Sec Hero_bg'>
                        <div className='section'>
                            <FadeInUp><Header /></FadeInUp>

                            <div className='heroSec'>
                                <AnimatedSection>
                                    <h5><em>●</em> Web Strategy & Development</h5>
                                    {/* <h2>Crafting Interactive Web<br /> Journeys with Creativity.</h2> */}
                                    <h2>Turning Ideas Into Growth <br /> Ready Digital Systems.</h2>

                                </AnimatedSection>
                                <div className='heroImgContainer'>
                                    <FadeInUp>
                                        <div className='HeroSvgContainer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1036 817">
                                                <defs>
                                                    <clipPath id="clipPath">
                                                        <path fill="none" fillRule="evenodd" d="M1006 0c16.57 0 30 13.431 30 30v297.993c0 16.569-13.43 30-30 30h-78.497c-9.114 0-16.503 7.389-16.503 16.504 0 9.114-7.389 16.503-16.503 16.503H523c-16.569 0-30 13.431-30 30v366c0 16.569-13.431 30-30 30H30c-16.569 0-30-13.431-30-30V79.087c0-16.569 13.431-30 30-30h709.457c13.555 0 24.543-10.989 24.543-24.544S774.988 0 788.543 0H1006Z" />
                                                    </clipPath>
                                                </defs>
                                                <image href={about} className='heroImg' alt='Banner' width="100%" height="100%" clipPath="url(#clipPath)" preserveAspectRatio="xMidYMid meet" />
                                                <path fill="none" d="M1006 0c16.57 0 30 13.431 30 30v297.993c0 16.569-13.43 30-30 30h-78.497c-9.114 0-16.503 7.389-16.503 16.504 0 9.114-7.389 16.503-16.503 16.503H523c-16.569 0-30 13.431-30 30v366c0 16.569-13.431 30-30 30H30c-16.569 0-30-13.431-30-30V79.087c0-16.569 13.431-30 30-30h709.457c13.555 0 24.543-10.989 24.543-24.544S774.988 0 788.543 0H1006Z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                    </FadeInUp>
                                    <div className='HeroBtnContainer'>
                                        <button className='heroBtn'><Link to="services" smooth={true} duration={700}>Dive In</Link></button>
                                    </div>
                                </div>
                                <div className='MobileHeroBanner'><img src={img} className='MobileHeroBannerImg' alt='Banner' width="100%" height="100%" /></div>
                            </div>

                            {/* About Us */}
                            <FadeInUp>
                                <div className='about' id='about'>
                                    <div className='aboutText'>
                                        <h5><em>● </em> About</h5>
                                        <h3>Who I Am</h3>
                                        {/* <p>My digital lanscape, welcome. It's me Huma Zahoor having the passion for Web Development. I concieve, elegant websites that both pack a creative punch and stand out and perform flawlessly.</p>
                                    <p>I am all about collaboration and creativity. I'm a firm believer in creating positive relationships with clients and bringing their projects to life through meticulous planning, design and build. Every website that I build stands as proof of my dedication towards quality and novelty.</p> */}


                                        <p>
                                            I’m Huma Zahoor — a strategist at heart and a developer by skill.
                                            I design and build websites that don’t just look good, but work as
                                            growth-ready digital systems.
                                        </p>

                                        <p>
                                            With hands-on experience in WordPress, Shopify,  MERN stack, and SEO-first
                                            architecture, I help agencies deliver fast, conversion-driven websites
                                            their clients can trust.
                                        </p>

                                        <p>
                                            Every project I take on is approached with clarity, structure, and
                                            long-term scalability in mind — because quality execution builds
                                            lasting partnerships.
                                        </p>
                                    </div>
                                </div>
                            </FadeInUp>

                        </div>
                    </div>

                    {/* Skills and Services */}
                    <FadeInUp><SkillService /></FadeInUp>


                    {/* Expertise */}
                    <FadeInUp><Expertise /></FadeInUp>


                    {/* Portfolio */}
                    <FadeInUp><Portfolio /></FadeInUp>

                    {/* CTA */}
                    <FadeInUp> <Cta /></FadeInUp>

                </div>
                {/* Footer */}
                <AnimatedSection><Footer /></AnimatedSection>

            </div>
        </div>
    )
}

export default Svgimg

