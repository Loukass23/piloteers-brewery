import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <>
            <div className="row teal lighten-2 mt-0">

                <div className="">
                    <h1 id="header" className="white-text mt-0"> Piloteers Beer App</h1>
                </div>
            </div>
            <div className="container">
                <Link to='/beer'>
                    <div className="card teal lighten-2">
                        <h1 className=" white-text">Beer List</h1>
                    </div>
                </Link>
            </div>
        </>
    )
}
