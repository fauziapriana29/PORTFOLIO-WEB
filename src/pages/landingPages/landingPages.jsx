import React from 'react'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'

const LadingPages = () => {

    return (
        <div>
            <h1>LANDING PAGES</h1>
            <h1>hi i'am is <Typical
                loop={Infinity}
                className="typing"
                wrapper="b"
                    steps={[
                        ' web developer', 2000,
                        ' youtuber', 2000,
                    ]}
                />
            </h1>
            <Link className="btn btn-danger" to="/start">GO START</Link>
        </div>
    )
}

export default LadingPages