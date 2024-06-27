import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
export function Navbar() {
    function reloadPageOnce() {
        if (!sessionStorage.getItem('visited')) {
            sessionStorage.setItem('visited', 'true');
            window.location.reload();
        }
    }

    useEffect(() => {
        reloadPageOnce();
    }, []);
    const handleLinkClick = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('visited');
        window.location.href = e.target.href;
    };
    const [formData, setFormData] = useState({ name: '', email: '', msg: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Query sent successfully!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to send query.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send query.',
            });
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
  
    return (

        <div className="wrapper">

            <div className="header">
                <div className="logo"><Link to="/" ><img src="https://ecis.in/ecorp-react/images/logo.png" alt="ECIS" /></Link></div>
                <div className="headerBtns">
                    <div className="menuBtn" id="menuBtn"><span>Menu</span></div>
                    <div className="menuBtn" id="sayhello">
                        <span>Say Hello</span>
                        <svg width="20" height="18" viewBox="0 0 20 18"> <g> <g> <g> <path fill="/fff" d="M10 15.46a8.59 8.59 0 0 0 6-2.76v2.2a7.87 7.87 0 0 1-6 2.74 7.76 7.76 0 0 1-6-2.79v-2.21a8.63 8.63 0 0 0 6 2.82z"></path> </g> </g> <g> <path fill="/008ae9" d="M16.55.34h-.05z"></path> </g> <g> <path fill="/fff" d="M15.5 7.02v-7h2v7z"></path> </g> <g> <path fill="/fff" d="M13 2.5h7v2h-7z"></path> </g> <g> <path fill="/fff" d="M2.57 7.02v-7h2v7z"></path> </g> <g> <path fill="/fff" d="M.07 2.5h7v2h-7z"></path> </g> </g> </svg>
                    </div>
                </div>
            </div>

            <div className="menuContainer">
                <div className="closemenu"><i>Close</i> <span>&times;</span></div>
                <div className="inner-menu">
                    <nav className="top-menu">
                        <ul className="list-inline">
                            <li style={{ "--i": 1 }}>
                                <section>
                                    <h4>Studios</h4>
                                    <ul className="list-inline">
                                        <li><a href="/">Brand Identity Development</a></li>
                                        <li><a href="/">Packaging Design</a></li>
                                        <li><a href="/">Promotional Material Design</a></li>
                                        <li><a href="/">Creative Content</a></li>
                                        <li><a href="/">Photography & Videography</a></li>
                                    </ul>
                                </section>
                            </li>
                            <li style={{ "--i": 2 }}>
                                <section>
                                    <h4>Labs</h4>
                                    <ul className="list-inline">
                                        <li><a href="/">Website Design and Development</a></li>
                                        <li><a href="/">eCommerce Websites</a></li>
                                        <li><a href="/">App Development</a></li>
                                        <li><a href="/">Product Engineering</a></li>
                                    </ul>
                                </section>
                            </li>
                            <li style={{ "--i": 3 }}>
                                <section>
                                    <h4>Digital</h4>
                                    <ul className="list-inline">
                                        <li><a href="/">Digital Strategy</a></li>
                                        <li><a href="/">Search Engine Optimisation</a></li>
                                        <li><a href="/">Social Media Advertising</a></li>
                                        <li><a href="/">Social Media Management</a></li>
                                        <li><a href="/">Conversion Rate Optimisation</a></li>
                                        <li><a href="/">Pay-Per-Click Marketing</a></li>
                                        <li><a href="/">Influencer Marketing</a></li>
                                        <li><a href="/">Email Marketing</a></li>
                                        <li><a href="/">Content Marketing</a></li>
                                        <li><a href="/">Digital Analytics</a></li>
                                    </ul>
                                </section>
                            </li>
                            <li style={{ "--i": 4 }}>
                                <section>
                                    <h4>Industries</h4>
                                    <ul className="list-inline">
                                        <li><a href="/">Hospitality Marketing</a></li>
                                        <li><a href="/">Retail and eCommerce</a></li>
                                        <li><a href="/">Banking and Finance</a></li>
                                        <li><a href="/">Education</a></li>
                                        <li><a href="/">Insurance</a></li>
                                    </ul>
                                </section>
                            </li>
                        </ul>
                    </nav>
                    <nav className="bottom-menu">
                        <ul className="list-inline">
                            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                            <li><a href="/" onClick={handleLinkClick}>Portfolio</a></li>
                            <li><Link to="/career" onClick={handleLinkClick}>Careers</Link></li>
                            <li><Link to="/testimonials" onClick={handleLinkClick}>Testimonials</Link></li>
                            <li><Link to="/contactUs" onClick={handleLinkClick}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="helloContainer">
                <div className="helloClose"><span>Close</span></div>
                <div className="inner-hello">
                    <div className="formContainer">
                        <h2>To say <br />hello</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="field"><input type="text" name="name" id="name" placeholder="Say hello" value={formData.name}
                                onChange={handleInputChange} /></div>
                            <div className="field"><input type="email" name="email" id="email" placeholder="Email" value={formData.email}
                                onChange={handleInputChange} /></div>
                            <div className="field"><textarea name="msg" id="msg" placeholder="Your message" rows="5" value={formData.msg}
                                onChange={handleInputChange}></textarea></div>
                            <div className="field"><button className="send"><span>Send</span><i className="fa fa-arrow-right"></i></button></div>
                        </form>
                    </div>
                    <div className="menu-social">
                        <ul className="list-inline">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <div className="number">
                            <p>
                                <a href="tel:+911135942563">+91 11 35942563</a>
                                <a href="mailto:info@ecorp.co.in">info@ecorp.co.in</a>
                            </p>
                            <p className="mb-0">Iconic Tower, Sec-62,<br />Noida, India</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Navbar
