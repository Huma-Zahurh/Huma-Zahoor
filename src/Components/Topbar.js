import '../Styles/Layout.css'
import { useTheme } from '../ThemeContext';

const Topbar = () => {

  const { theme, toggleTheme } = useTheme();

    return (

        <div className="top-bar animate__animated animate__fadeIn" id='top'>
        <div className="left-side">
          <span><em>●</em> <b>Strategist</b></span>
        </div>
        <div className="center">
          <div className="scrolling-text">
            {/* <span>Creating Innovative Digital Experiences ✦ SEO, MERN Stack & WordPress Specialist ✦ Awed by Creativity? Message Me! ✦ Creating Innovative Digital Experiences ✦ SEO, MERN Stack & WordPress Specialist ✦ Awed by Creativity? Message Me! ✦ Creating Innovative Digital Experiences ✦ SEO, MERN Stack & WordPress Specialist ✦ Awed by Creativity? Message Me! ✦ Creating Innovative Digital Experiences ✦ SEO, MERN Stack & WordPress Specialist ✦ Awed by Creativity? Message Me! ✦</span> */}

            
            
            <span>Creating Innovative Digital Experiences ✦ Conversion-Focused Websites ✦ WordPress, Shopify , MERN Stack & SEO-Ready Architecture ✦ High-Speed ✦ Scalable ✦ Let’s Build Websites That Support Growth ✦ Awed by Creativity? Message Me! ✦ Creating Innovative Digital Experiences ✦ Conversion-Focused Websites ✦ WordPress, Shopify , MERN Stack & SEO-Ready Architecture ✦ High-Speed ✦ Scalable ✦ Let’s Build Websites That Support Growth ✦ Awed by Creativity? Message Me! ✦ </span>

           
          </div>
        </div>
        <div className="right-side">
          <button onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>

      </div>
    )
}

export default Topbar
