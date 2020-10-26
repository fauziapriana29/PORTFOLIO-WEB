import React, {useEffect} from 'react'
import './biodata.css'

import Image from '../../../assets/potrait.jpg'
import Facebook from '../../../assets/facebook.png'
import Instagram from '../../../assets/instagram.png'
import Linkedin from '../../../assets/linkedin.png'
import Twitter from '../../../assets/twitter.png'

import WOW from 'wowjs'
import Typical from 'react-typical'


const Biodata = () => {
    useEffect(() => {
        new WOW.WOW({}).init();
    }, [])
    return (
        <div className="main-cont-biodata" id="biodata">
            <div className="container cont-bio">
                <div className="row">
                    <div className="cont-images wow bounceInLeft"><img src={Image} alt="profil" className="image-profil"/></div>
                    <div className="cont-data wow bounceInRight">
                        <div className="bio-name">
                            <h1 className="name">Fauzi Apriana Basri</h1>
                            <p className="name-p">i'm is a 
                            <Typical
                                loop={Infinity}
                                    className="typing-title"
                                wrapper="normal"
                                    steps={[
                                        ' web developer', 2000,
                                        ' AutoCad Designer', 2000,
                                        ' Photoshop Editor', 2000,
                                        ' Video Editor', 2000,
                                        ' Entrepreneur', 2000,
                                    ]}
                            />
                            </p>
                        </div>
                        <div className="bio-dateOfBirth">
                            <h3 className="title-birth " >Date Of Birth :</h3>
                            <p className="dateBirth ">April 29th 1999</p>
                        </div>
                        <div className="bio-address">
                            <h3 className="title-address ">Address :</h3>
                            <p className="address ">Batam Center</p>
                        </div>
                        <div className="bio-phone">
                            <h3 className="title-phone " >Phone :</h3>
                            <p className="phone " data-wow-delay="0.7s">0852-7436-8010</p>
                        </div>
                        <div className="bio-email">
                            <h3 className="title-email ">Email :</h3>
                            <p className="email ">fauzicoding@gmail.com</p>
                        </div>
                    </div>
                    <div className="sosmed wow bounceInUp">
                        <a href="https://www.facebook.com/fauzi.apriana.5" target="_blank"><img src={Facebook} alt="Facebook" className="sosmed-img" /></a>
                        <a href="https://www.instagram.com/fauziaprianapnb/?hl=id" target="_blank"><img src={Instagram} alt="Instagram" className="sosmed-img" /></a>
                        <a href="https://twitter.com/AprianaFauzi" target="_blank"><img src={Twitter} alt="Twitter" className="sosmed-img"/></a>
                        <a href="https://www.linkedin.com/in/fauzi-apriana-01541a1b8/" target="_blank"><img src={Linkedin} alt="Linkedin" className="sosmed-img"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biodata