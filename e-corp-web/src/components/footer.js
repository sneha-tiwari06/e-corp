import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="footer-area overflow-hidden w-100">
    <div className="container-fluid">
        <div className="midfooter">
            <div className="row gap-row justify-content-between">
                <div className="col-sm-4 footmails">
                    <i className="fa fa-phone"></i>
                    <a href="tel:+911135942563">+911135942563</a>
                </div>
                <div className="col-sm-4 footmails">
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@ecorp.co.in">info@ecorp.co.in</a>
                </div>
                <div className="col-sm-4 footmails">
                    <i className="fa fa-map-marker-alt"></i>
                    <a href="https://maps.app.goo.gl/3jFqb7JG1qDpYQJW7" target="_blank" rel="noreferrer">View on Google Map</a>
                </div>
            </div>
        </div>
    </div>
    <div className="bottomfooter w-100">
        <div className="container-fluid">
            <div className="row mx-0 flex-row-reverse justify-content-center justify-content-sm-between">
                <div className="col-md-6 col-sm-6 footlinks ">
                    <ul className="list-inline d-flex flex-wrap" style={{justifyContent: "end"}}>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col-md-6 col-sm-6 copyright">
                    <p className="mb-0">&copy; 2024 E-corp Info-systems</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<div className="button-top"><i className="fa fa-chevron-up"></i></div>
    </div>
  )
}

export default Footer
