import React from 'react'
import './Prosess.css'

function Prosess() {
    return (
        <div>
            <div className="container-prosess">
                <div className="cards-prosess">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>80<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Ms. Office</h2>
                    </div>
                </div>

                <div className="cards-prosess">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>90<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">PHOTOSHOP</h2>
                    </div>
                </div>

                <div className="cards-prosess">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>97<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">AUTOCAD</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prosess
