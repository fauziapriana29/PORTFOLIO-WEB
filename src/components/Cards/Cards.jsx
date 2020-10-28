import React from 'react'
import './Cards.css'

import TK from '../../assets/tkPhoto.png'
import SD from '../../assets/sd2Photo.png'
import SMP from '../../assets/smp16-edit.png'
import SMK from '../../assets/smkPhoto.png'


function Cards() {
    return (
        <div className="cont-cards">
            <h1 className="title-educations">EDUCATIONS</h1>
            <div className="cards wow bounceInLeft">
                <div className="content">
                    <h3 className="title-school">TK ALKAFFAH</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <img src={TK} alt="tk" className="tk-img logo"/>
            </div>
            <div className="cards wow bounceInRight">
                <div className="content">
                    <h3 className="title-school">SDN 004 SEI BEDUK</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <img src={SD} alt="sd" className="sd-img logo"/>
            </div>
            <div className="cards wow bounceInLeft">
                <div className="content">
                    <h3 className="title-school">SMPN 16 BATAM</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <img src={SMP} alt="smp" className="smp-img logo"/>
            </div>
            <div className="cards wow bounceInRight">
                <div className="content">
                    <h3 className="title-school">SMK PENERBANGAN</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <img src={SMK} alt="smk" className="smk-img logo"/>
            </div>
        </div>
    )
}

export default Cards
