import React from 'react'
import '../Styles/Portfolio.css'
import AnimatedSection from './AnimatedSection'
import port1 from '../Assets/portfolio/8.png'
import port2 from '../Assets/portfolio/5.png'
import port3 from '../Assets/portfolio/31.png'
import port4 from '../Assets/portfolio/21.png'
import port5 from '../Assets/portfolio/51.png'
import port6 from '../Assets/portfolio/7.png'

const Portfolio = () => {
  return (
    <div>
       {/* Portfolios */}
       <div className='PortfolioContainer bg section' id='portfolio'>
        <div className='PortfolioText'>
          <h5><em>●</em> Portfolio</h5>
          <h3>Work Experience</h3>
          <p>With a passion for creating functional and high-performance websites, I bring over 2 years of experience working with companies on custom web solutions, ensuring every project combines design, usability, and scalability while exceeding client expectations.</p>
          <ol>
            <li>As a freelance web developer, I specialize in developing and maintaining client websites with a focus on high-quality standards and timely project delivery.</li>
            <li>As a web developer, I led the creation of a comprehensive medical preparation portal, building multi-role dashboards for students, & admins, and integrating quizzes, past papers, notes, & announcements for seamless learning.</li>
            <li>As a shopify and WooCommerce specialist, I developed responsive, SEO-optimized websites and e-commerce platforms, delivering fast, reliable performance and intuitive user experiences.</li>
          </ol>
        </div>
        <div className='Portfolios'>

            <div className='PortfolioBox'>
              <img src={port1} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>Ecommerce Website</h3>
            </div>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port2} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>Landing Page</h3>
            </div>
            </AnimatedSection>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port3} alt='PortfolioImage' />
            <h5><em>●</em> MERN Stack</h5>
              <h3>Medical preparation Portal</h3>
            </div>
            </AnimatedSection>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port4} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>Booking Website</h3>
            </div>
            </AnimatedSection>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port6} alt='PortfolioImage' />
            <h5><em>●</em> Shopify</h5>
              <h3>Store Redesign</h3>
            </div>
            </AnimatedSection>

             <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port5} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>Business Site</h3>
            </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
