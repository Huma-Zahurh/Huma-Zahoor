import React from 'react'
import '../Styles/Portfolio.css'
import AnimatedSection from './AnimatedSection'
import port1 from '../Assets/portfolio/1.png'
import port2 from '../Assets/portfolio/2.png'
import port3 from '../Assets/portfolio/3.png'
import port4 from '../Assets/portfolio/4.png'

const Portfolio = () => {
  return (
    <div>
       {/* Portfolios */}
       <div className='PortfolioContainer bg section' id='portfolio'>
        <div className='PortfolioText'>
          <h5><em>●</em> Portfolio</h5>
          <h3>Work Experience</h3>
          <p>With a passion for creating visually compelling and functional websites, I bring over 2 years of experience in custom site development using tools like Elementor and WooCommerce, ensuring every project exceeds expectations in design and performance.</p>
          <ol>
            <li>As a freelance web developer, I specialize in developing and maintaining client websites with a focus on high-quality standards and timely project delivery.</li>
            <li>As a WordPress specialist, I excelled in custom site development. I specialized in creating responsive and SEO-optimized websites, delivering intuitive user interfaces that exceeded client expectations.</li>
            <li>As a junior web developer, I contributed to the development and maintenance of websites using HTML, CSS, and JavaScript. I assisted in implementing responsive designs and enhancing user experience across various projects.</li>
          </ol>
        </div>
        <div className='Portfolios'>

            <div className='PortfolioBox'>
              <img src={port1} alt='PortfolioImage' />
            <h5><em>●</em> MERN Stack</h5>
              <h3>Ecommerce Website</h3>
            </div>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port2} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>Business Website</h3>
            </div>
            </AnimatedSection>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port3} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>E-Quran Website</h3>
            </div>
            </AnimatedSection>

            <AnimatedSection>
            <div className='PortfolioBox'>
              <img src={port4} alt='PortfolioImage' />
            <h5><em>●</em> WordPress</h5>
              <h3>Landing Page</h3>
            </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
