import React from 'react'
import '../Styles/Cta.css'
import img from '../Assets/ctabanner.png'
import cta from '../Assets/Cta.png'
import ctaLight from '../Assets/ctaLight.png'
import { useTheme } from '../ThemeContext';

const Cta = () => {

    const { theme } = useTheme();

    return (
        <div className='CtaContainer'>
            <div className='centeredImage'>
                <img src={img} alt='img' className='CtaImg' />
           

            <div className='ctaSvg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"viewBox="0 0 4648 609">
                <defs>
                    <clipPath id="cta">
                        <path fill="none" fillRule="evenodd" d="M0 90C0 40.294 40.294 0 90 0h1701.82c49.7 0 90 40.294 90 90v85.119c0 49.706 40.29 90 90 90H4558c49.71 0 90 40.294 90 90V519c0 49.706-40.29 90-90 90H1744.37c-49.7 0-90-40.294-90-90v-87.229c0-49.705-40.29-90-90-90H90c-49.706 0-90-40.294-90-90V90Z" />
                    </clipPath>
                </defs>
                <image href={theme === 'dark' ? cta : ctaLight} className='heroImg' alt='Banner' width="100%" height="100%" clipPath="url(#cta)" preserveAspectRatio="xMidYMid meet" />
                <path fill="none" d="M0 90C0 40.294 40.294 0 90 0h1701.82c49.7 0 90 40.294 90 90v85.119c0 49.706 40.29 90 90 90H4558c49.71 0 90 40.294 90 90V519c0 49.706-40.29 90-90 90H1744.37c-49.7 0-90-40.294-90-90v-87.229c0-49.705-40.29-90-90-90H90c-49.706 0-90-40.294-90-90V90Z" />
            </svg>
            </div>

            </div>

        </div>
    )
}

export default Cta
