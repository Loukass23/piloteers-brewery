import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <>
            <div className="row teal lighten-2 mt-0">

                <h1 id="header" className="white-text mt-0"> Piloteers Beer App</h1>

            </div>


            <div className="container">

                <div style={{ padding: 20 }} className="card py-5 white lighten-2 z-depth-4">
                    <p className=" black-text ">
                        Hello, <br />
                        This demo app was made using React.js to fit Piloteers' stack. <br />
                        It uses Materialize front end framework and Redux store. <br />
                        It is designed to only fetch the data only when needed.<br />
                        Please let me know if you have any comments or questions.<br />
                        <br />
                        Best regards,<br />
                        Lucas Dupias
     </p>

                    <p>  Please find bellow a links to my online portfolio if you would like to see more of my projects,
                            as well as links to my LinkedIn profile and the GitHub repository for this project</p>

                    < ul style={{ padding: 10 }} >
                        <li>
                            <a id="beer-button" style={{ margin: 5 }} href="https://lucasdupias.netlify.com/" className="btn btn-floating btn-medium  waves-effect waves-light"
                                target="_blank"> <i className="fas fa-2x fa-portrait"></i></a>

                            <a id="beer-button" style={{ margin: 5 }} className="btn btn-floating btn-medium  waves-effect waves-light "
                                href="https://www.linkedin.com/in/lucasdupias" target="_blank">
                                <i className="fab fa-2x fa-linkedin"></i>
                            </a>
                            <a id="beer-button" style={{ margin: 5 }} className="btn btn-floating btn-medium  waves-effect waves-light "
                                href="https://github.com/Loukass23/piloteers-brewery" target="_blank">
                                <i className="fab fa-2x fa-github"></i>
                            </a>
                        </li>
                    </ ul>

                </div>
                <Link to='/beer'>
                    <div id="beer-link" className="card py-5 teal lighten-2 z-depth-4">
                        <h4 className=" white-text ">BEER LIST</h4>

                    </div>
                </Link>
            </div>
        </>
    )
}
