import React from 'react';
import '../Styles/SkillService.css';
import LeLight from '../Assets/LLight2.png'
import LeDark from '../Assets/LDark6.png'
import ReLight from '../Assets/RLight2.png'
import RiDark from '../Assets/RDark6.png'
import { Link } from 'react-scroll';
import { useTheme } from '../ThemeContext';
import FadeInUp from './FadeInUp';


const SkillService = () => {

  const { theme } = useTheme();

  return (
    <div className="skillServiceContainer" >
      {/* Skills */}
      <div className='skillContainer section fade-in '>
        <div className='skillsText'>
          <h5><em>●</em> Skills</h5>
          <h3>Technical Proficiency</h3>
          <p>WordPress & MERN Stack Apprentice I development skills in WordPress, deep passion for working on technology which is core of connectivity. I have honed a variety of internet techniques and SEO best practices so that I can provide high performance output and user experience</p>

        </div>

        <div className='skills'>
          <div className='skillsBox'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1926 1301">
              <defs>
                <clipPath id="skillBox2">
                  <path fill="none" fillRule="evenodd" d="M1538.36 1200.67c-.06 55.23 44.66 100.05 99.89 100.11l186 .22c55.22.06 100.05-44.66 100.11-99.88l.09-77.12c.07-55.23-44.65-100.06-99.88-100.12l-139-.16c-55.23-.07-99.95-44.889-99.89-100.117l.1-85.404c.07-55.228 44.89-99.948 100.12-99.884l139 .161c55.23.064 100.05-44.655 100.11-99.884l.22-185.558c.06-55.228-44.66-100.052-99.88-100.116l-943.004-1.093c-55.228-.064-99.948-44.887-99.884-100.116l.175-150.918C782.701 45.563 737.981.739 682.753.675l-582-.674C45.525-.063.702 44.656.638 99.884L.4 304.27c-.064 55.228 44.655 100.052 99.884 100.116l478.999.555c55.229.064 99.948 44.887 99.884 100.116L679 649.198c-.064 55.228-44.887 99.948-100.116 99.884l-149-.173c-55.228-.064-100.051 44.655-100.115 99.884l-.14 120.796c-.064 55.232 44.655 100.052 99.884 100.112l1008.996 1.17c55.23.07 99.95 44.89 99.89 100.12l-.04 29.68Z" clipRule="evenodd" />
                </clipPath>
              </defs>
              <image href={theme === 'dark' ? LeDark : LeLight} className='heroImg' alt='Banner' width="100%" height="100%" clipPath="url(#skillBox2)" preserveAspectRatio="xMidYMid meet" />
              <path fill="none" fillRule="evenodd" d="M1538.36 1200.67c-.06 55.23 44.66 100.05 99.89 100.11l186 .22c55.22.06 100.05-44.66 100.11-99.88l.09-77.12c.07-55.23-44.65-100.06-99.88-100.12l-139-.16c-55.23-.07-99.95-44.889-99.89-100.117l.1-85.404c.07-55.228 44.89-99.948 100.12-99.884l139 .161c55.23.064 100.05-44.655 100.11-99.884l.22-185.558c.06-55.228-44.66-100.052-99.88-100.116l-943.004-1.093c-55.228-.064-99.948-44.887-99.884-100.116l.175-150.918C782.701 45.563 737.981.739 682.753.675l-582-.674C45.525-.063.702 44.656.638 99.884L.4 304.27c-.064 55.228 44.655 100.052 99.884 100.116l478.999.555c55.229.064 99.948 44.887 99.884 100.116L679 649.198c-.064 55.228-44.887 99.948-100.116 99.884l-149-.173c-55.228-.064-100.051 44.655-100.115 99.884l-.14 120.796c-.064 55.232 44.655 100.052 99.884 100.112l1008.996 1.17c55.23.07 99.95 44.89 99.89 100.12l-.04 29.68Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='skillsBox'>

            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1925 1299">
              <defs>
                <clipPath id="skillBox1">
                  <path fill="none" fillRule="evenodd" d="M386 100C386 44.772 341.228 0 286 0H100C44.772 0 0 44.772 0 100v77.12c0 55.228 44.772 100 100 100h139c55.228 0 100 44.772 100 100v85.403c0 55.229-44.772 100-100 100H100c-55.228 0-100 44.772-100 100v185.559c0 55.228 44.772 100 100 100h943c55.23 0 100 44.771 100 99.998V1199c0 55.23 44.77 100 100 100h582c55.23 0 100-44.77 100-100V994.616c0-55.229-44.77-100-100-100h-479c-55.23 0-100-44.772-100-100V650.475c0-55.229 44.77-100 100-100h149c55.23 0 100-44.772 100-100V329.678c0-55.228-44.77-100-100-100H486c-55.228 0-100-44.771-100-100V100Z" clipRule="evenodd" />
                </clipPath>
              </defs>
              <image href={theme === 'dark' ? RiDark : ReLight} className='heroImg' alt='Banner' width="100%" height="100%" clipPath="url(#skillBox1)" preserveAspectRatio="xMidYMid meet" />
              <path fill="none" fillRule="evenodd" d="M386 100C386 44.772 341.228 0 286 0H100C44.772 0 0 44.772 0 100v77.12c0 55.228 44.772 100 100 100h139c55.228 0 100 44.772 100 100v85.403c0 55.229-44.772 100-100 100H100c-55.228 0-100 44.772-100 100v185.559c0 55.228 44.772 100 100 100h943c55.23 0 100 44.771 100 99.998V1199c0 55.23 44.77 100 100 100h582c55.23 0 100-44.77 100-100V994.616c0-55.229-44.77-100-100-100h-479c-55.23 0-100-44.772-100-100V650.475c0-55.229 44.77-100 100-100h149c55.23 0 100-44.772 100-100V329.678c0-55.228-44.77-100-100-100H486c-55.228 0-100-44.771-100-100V100Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* services */}
      <FadeInUp>
      <div className='ServiceContainer bg section' id='services'>
        <div className='serviceText'>
          <h5><em>●</em> Services</h5>
          <h3>What I Do</h3>
          <p>I provide a wide array of web development services designed to cater your needs. I specialize in custom WordPress development, SEO optimization, and full-stack skills to ensure I produce outstanding results.</p>
        </div>
        <div className='services'>
          <div className='LeftServices'>
            <div className='serviceBox'>
              <h3>WordPress</h3>
              <p>Crafting custom WordPress websites that empower brands to manage and update their content with ease, using tools for seamless user experience.</p>
              <h5><em>●</em> Available</h5>
              <button className='btn'><Link to="contact" smooth={true} duration={700}>More Details</Link></button>
            </div>
            <div className='serviceBox'>
              <h3>MERN Stack</h3>
              <p>Building scalable and robust web applications with the MERN stack, ensuring a seamless integration of MongoDB, Express.js, React, and Node.js for high-performance results.</p>
              <h5><em>●</em> Available</h5>
              <button className='btn'><Link to="contact" smooth={true} duration={700}>More Details</Link></button>
            </div>
          </div>
          <div className='RightServices'>
            <div className='serviceBox'>
              <h3>SEO</h3>
              <p>Implementing tailored SEO strategies to boost your website's visibility, drive organic traffic, and enhance your online presence for sustained growth.</p>
              <h5><em>●</em> Available</h5>
              <button className='btn'><Link to="contact" smooth={true} duration={700}>More Details</Link></button>
            </div>
            <div className='serviceBox'>
              <h3>Management</h3>
              <p>Providing comprehensive website management services to ensure your site runs smoothly, with regular updates and performance optimizations to keep it at its best.</p>
              <h5><em>●</em> Available</h5>
              <button className='btn'><Link to="contact" smooth={true} duration={700}>More Details</Link></button>
            </div>
          </div>
        </div>
      </div>
      </FadeInUp>
    </div>
  );
};

export default SkillService;




