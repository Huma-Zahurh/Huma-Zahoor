import React, { useState } from 'react'
import '../../Styles/Layout.css'
import logo from '../../Assets/Logoo.png'
import { Link } from 'react-scroll'
import axios from 'axios'
import { useTheme } from '../../ThemeContext';

const Footer = () => {

  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
       e.preventDefault();
       const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Message: message
       }
       axios.post("https://sheet.best/api/sheets/6af02028-5677-4b71-aa4b-d6cbf8dbf6dd", data)
       .then(response => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
       })
       
  }

  return (
    <div className='footer' id='contact'>
      <footer className='ftBg '>
        <img className='logo' src={logo} alt='logo' />

        <div className='footContainer'>
          <div className='contact'>
            <h5><em>●</em>Connect With me</h5>

            <form className='form' onClick={(e) => handleSubmit(e)}>
              <label>Full Name</label>
              <input type='text' placeholder='Ahmed Faraz' name='Name' required value={name} onChange={(e) => setName(e.target.value)} />

              <div className='contact-row'>
                <div className='contact-field'>
                  <label>Email</label>
                  <input type='email' placeholder='Ahmed@gmail.com' name='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='contact-field'>
                  <label>Phone Number</label>
                  <input type='number' placeholder='0332 XXXXXX' name='Phone' required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
              </div>

              <label>Message</label>
              <textarea placeholder='I need Web development service...' name='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
              <button className='btn' type='submit'>Submit</button>
            </form>

          </div>


          <div className='footLinksArea'>

            <div className='footlinks'>
              <div className='footLinksContainer'>
                <h5>Services</h5>
                <ul>
                  <li><Link to="services" smooth={true} duration={700}>WordPress</Link></li>
                  <li><Link to="services" smooth={true} duration={700}>MERN</Link></li>
                  <li><Link to="services" smooth={true} duration={700}>SEO</Link></li>
                  <li><Link to="services" smooth={true} duration={700}>Management</Link></li>
                </ul>
              </div>

              <div className='footLinksContainer'>
                <h5>Quick Links</h5>
                <ul>
                  <li><Link to="about" smooth={true} duration={700}>About</Link></li>
                  <li><Link to="services" smooth={true} duration={700}>Services</Link></li>
                  <li><Link to="work-experience" smooth={true} duration={700}>Experience</Link></li>
                  <li><Link to="portfolio" smooth={true} duration={700}>Portfolio</Link></li>
                </ul>
              </div>
            </div>

            <div className='contactIcons'>
              <div className='contactIconsContainer'>
                <div className='icon'>Fb</div>
                <div className='icon'>&nbsp;In</div>
                <div className='icon'> &nbsp;X&nbsp;</div>
                <div className='icon'>Git</div>
              </div>
            </div>

          </div>
        </div>

        <div className='bottomFoot'>
          <p>Copyright © 2024  Huma Zahoor.</p>
          <div className='footBtns'>          
            <button onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
            <button><Link to="top" smooth={true} duration={900}>Top</Link></button>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer
