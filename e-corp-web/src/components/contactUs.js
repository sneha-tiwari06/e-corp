import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Contact from './contact'

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="breadcrumb-container bg-purple w-100">
            <div className="pageHeading">
                <div className="row mx-0 align-items-center justify-content-between">
                    <div className="col-md-6 col-sm-6 pageTitle"><h2 className="mb-0 text-ecis text-white">Contact</h2></div>
                    <ol className="breadcrumb col-md-6 col-sm-6" style={{display: "flex", justifyContent: "end"}}>
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="w-100 padding pb-0 contact-wrapper">
            <div className="container-fluid">
                <div className="heading-container text-center">
                    <div className="heading mx-auto mb-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 441.3 167.3" style={{enableBackground:"new 0 0 441.3 167.3"}}>
                            <g>
                                <path className="zigzag-line" fill="#FCE4D9" d="M23.8,157.1c-2.6,3.4,0.8-0.9,1.5-1.8c2.4-2.9,4.8-5.7,7.3-8.5c8.7-9.9,17.9-19.3,27.5-28.3
                                    c29.3-27.7,62.3-51.6,98.7-69.1c21.2-10.2,43.8-17.8,66.9-22.2c2.9-0.6,5.8-1,8.7-1.5c3-0.5-0.1-0.3-1.6-0.9
                                    c-1-0.4-2.3-2.4-2.6-3.5c-0.1-0.4,0-2.8-0.1-2.3c-0.2,0.7-1,2.5,0.1,0c-0.3,0.6-0.6,1.2-0.9,1.8c-0.9,1.7-2,3.2-3.1,4.8
                                    c-0.6,0.9-1.3,1.7-1.9,2.6c1.1-1.5-1,1.3-1.4,1.7c-1.8,2.3-3.7,4.5-5.7,6.7c-4.4,5.1-8.9,10-13.5,14.9
                                    C193,62.8,182,73.9,170.9,84.9c-17.2,17.1-35,33.5-51.8,50.9c-2.2,2.3-4.6,4.7-4.6,8.2c0,7.9,7.9,8.3,13.1,5.9
                                    c8.1-3.7,15.8-8.4,23.5-12.7c29.6-16.6,59-33.5,88.5-50c13.7-7.7,27.5-15.3,41.4-22.6c4.9-2.6,9.8-5.1,14.8-7.5
                                    c0.9-0.4,1.8-0.9,2.7-1.3c0.6-0.3,3.4-1.5,0.9-0.4c4.4-1.8,8.9-3.4,13.5-4.5c3.2-0.8,5.5-1.1,9-0.9c-1.7-0.1,0.2,0.1,0.5,0.2
                                    c1.8,0.5-1.3-0.7,0.2,0.1c-0.5-0.3-1-1.2-1.1-2.2c0,0.4-0.3,2.1,0.1,0.3c-0.1,0.7-0.4,1.4-0.6,2c0,0-1.6,2.8-2.2,3.8
                                    c-3.3,5.2-7.9,9.6-12.2,13.8C294,80.5,280.2,92,267,104c-6.4,5.8-12.7,11.6-18.7,17.7c-3.4,3.4-8.3,7.6-9.5,12.5
                                    c-1.9,7.4,5,10.9,11.1,9.9c3.2-0.5,6.3-2,9.2-3.2c20.3-8.4,40.2-17.6,60.7-25.7c34.9-13.9,70.7-25.7,107-35.3
                                    c9.3-2.5,5.4-16.9-4-14.5c-48.8,12.9-96.3,30.1-142.6,50.1c-6.6,2.9-13.2,5.8-19.8,8.7c-1.2,0.5-2.5,1.1-3.7,1.6
                                    c-0.3,0.1-2.2,0.9-0.5,0.2c-0.5,0.2-1,0.4-1.6,0.6c-1.8,0.8-3.7,1.5-5.6,2.1c-1,0.3-5,1.1-1.5,0.7c-1.5,0.2,0.7,0.2,0.9,0.2
                                    c3.4,0.9,5.7,5,4.9,8.3c-0.6,2.2-0.6,1.4-0.1,0.5c0.3-0.4,1.1-1.5-0.2,0.1c0.3-0.4,0.7-0.8,1-1.2c0.9-1,1.8-2,2.7-2.9
                                    c2.6-2.8,5.3-5.4,8.1-8c13.5-12.9,27.5-25.2,41.4-37.6c7.4-6.6,14.8-13.2,21.1-20.8c5.4-6.5,10.8-14.3,9.2-23.1
                                    C335,37.6,326.6,35,320,35c-8.4,0-17.1,2.9-24.7,6.1c-10.5,4.4-20.5,9.9-30.5,15.2C234.3,72.7,204.2,89.9,174,107
                                    c-12.7,7.2-25.4,14.4-38.1,21.5c-4,2.2-8,4.4-12.1,6.5c-1.2,0.6-2.3,1.2-3.5,1.8c-1.6,0.8,0.4-0.2,0.5-0.2c-0.1,0-0.2,0.1-0.4,0.1
                                    c2.4-0.8,7.7,0.9,8.8,5.2c0,1.3,0,2.7,0,4c-0.1,0.7-2.5,3.7-0.9,2c0.8-0.9,1.7-1.8,2.6-2.7c2.9-3,5.9-5.9,8.9-8.8
                                    c9.4-9.2,18.9-18.4,28.3-27.7c21.2-20.8,42.7-41.7,62-64.3c5.2-6.1,12.6-13.6,14.5-21.8c4.7-20.2-28.9-8.9-37.2-6.8
                                    C163.5,26.7,122.8,48.9,87,76.1c-27.9,21.2-54.7,45.6-76.1,73.5c-2.5,3.3-0.5,8.4,2.7,10.3C17.4,162.1,21.3,160.4,23.8,157.1
                                    L23.8,157.1z"></path>
                            </g>
                        </svg>
                        <h2>Keep In <span className="text-red">Touch</span> With Us</h2>
                    </div>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Laudantium quisquam dolorum deserunt.</h6>
                    <span className="short-border"></span>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row gap-row">
                            <div className="col-sm-4 contactBox">
                                <div className="inner">
                                    <div className="row">
                                        <div className="col-2"><i className="fa fa-map-marker-alt"></i></div>
                                        <div className="col-10">
                                            <article>
                                                <h4>Address</h4>
                                                <p>Iconic Tower, <br />Sec-62, Noida, India</p>
                                                <div className="viewmore"><a href="https://maps.app.goo.gl/3jFqb7JG1qDpYQJW7" target="_blank" rel="noreferrer" className="button">Get Direction <i className="fa fa-arrow-right"></i></a></div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 contactBox">
                                <div className="inner">
                                    <div className="row">
                                        <div className="col-2"><i className="fa fa-phone"></i></div>
                                        <div className="col-10">
                                            <article>
                                                <h4>Contact</h4>
                                                <p className="mb-2">Mobile: <a href="tel:01135942563" className="text-dark">011 35942563</a></p>
                                                <p className="mb-0">Email: <a href="mailto:info@ecorp.co.in" className="text-dark">info@ecorp.co.in</a></p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 contactBox">
                                <div className="inner">
                                    <div className="row">
                                        <div className="col-2"><i className="fa fa-clock"></i></div>
                                        <div className="col-10">
                                            <article>
                                                <h4>Hour of Operation</h4>
                                                <p className="mb-2"><span className="text-dark">Mon - Fri:</span> 09:30 - 18:30</p>
                                                <p className="mb-0"><span className="text-dark">Sat - Sun:</span> Close</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <Contact />

      <Footer />
    </div>
  )
}

export default ContactUs
