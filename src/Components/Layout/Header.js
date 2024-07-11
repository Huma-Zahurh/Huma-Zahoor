import React , {useState} from 'react'
import '../../Styles/Layout.css'
import logo from '../../Assets/Logoo.png'
import {Link} from 'react-scroll'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  return (
    <div>
      <header className='header'>
        <div className='logoContainer'>
           <img className='logo animate__animated animate__fadeInUp' src={logo} alt='logo' width={"140px"} />
        </div>
        <div  className={`animate__animated animate__fadeInUp ${menuActive ? 'mobileMenu' : 'navbar'}`}>
            <ul>
                <li><Link to="about" smooth={true} duration={700}>About</Link></li>
                <li><Link to="services" smooth={true} duration={700}>Services</Link></li>
                <li><Link to="work-experience" smooth={true} duration={700}>Work Experience</Link></li>
                <li><Link to="portfolio" smooth={true} duration={700}>Portfolio</Link></li>
            </ul>
        </div>
        <div className='menu-btns'>
        <button className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <em>☰</em>

          </button>
            <button className='btn  animate__animated animate__fadeInUp'><Link to="contact" smooth={true} duration={700}>Let's Talk</Link></button>
        </div>
      </header>
    </div>
  )
}

export default Header
