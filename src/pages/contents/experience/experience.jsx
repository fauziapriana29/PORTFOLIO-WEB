import React from 'react'
import './experience.css'

import Nok from '../../../assets/nok-edit.png'
import Pci from '../../../assets/pci-edit.png'

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <h1 className="main-title-experience wow rubberBand" data-wow-diration="1s">EXPERIENCE</h1>
            <div className="cont-company container">
                <div className="cont-nok-company wow bounceInUp" data-wow-delay="0.5s">
                    <div className="img-nok">
                        <img src={Nok} alt="Nok" />
                        <h3 className="title-company">PT.NOK PCB</h3>
                    </div>
                    <p className="desc-nok">
                        <p className="position">Position: <span>Setup Man</span></p>
                        <p className="year">Durations: <span>2017 - 2018</span></p>
                        in this company I am the Setup Man, in which this position has the duty to maintain the smooth running of a production, helping solve problems experienced by operators. such as, providing the materials, cleaning the machine according to the existing schedule, and many others.
                    </p>

                </div>
                <div className="cont-pci-company wow bounceInUp" data-wow-delay="0.75s">
                    <div className="img-pci">
                        <img src={Pci} alt="Pci" />
                    </div>
                    <div className="title-pci">
                        <h3 className="title-company">PT. PCI electronict</h3>
                        <p className="desc-pci">
                            <p className="position">Position: <span>Material Hendler</span></p>
                            <p className="year">Durations: <span>2018 - 2019</span></p>
                            in this company I am the Material Handler. which this position has the duty to receive goods/materials that come from several countries, for example Singapore, China, America. not only accept but also ensure that the material that comes or is received is not wrong
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Experience