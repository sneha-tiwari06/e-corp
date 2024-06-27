import React from 'react'

function Clients() {
  return (
    <div>
      <div className="w-100 hm-clientele-wrapper">
            <div className="clients-filter padding">
                <ul className="list-inline">
                    <li><button className="client-filter-btn active" data-target="corporates">Corporates & Others</button></li>
                    <li><button className="client-filter-btn" data-target="realestate">Real Estate</button></li>
                    <li><button className="client-filter-btn" data-target="education">Education</button></li>
                    <li><button className="client-filter-btn" data-target="personal">Personal</button></li>
                    {/* <li><button className="client-filter-btn" data-target="4">Hospitality</button></li>
                    <li><button className="client-filter-btn" data-target="5">Health Care</button></li>
                    <li><button className="client-filter-btn" data-target="6">Food</button></li>
                    <li><button className="client-filter-btn" data-target="7">Industrial</button></li>
                    <li><button className="client-filter-btn" data-target="8">Fashion & Beauty</button></li>
                    <li><button className="client-filter-btn" data-target="9">Consultancy</button></li>
                    <li><button className="client-filter-btn" data-target="10">Blogs</button></li>
                    <li><button className="client-filter-btn" data-target="12">NGO</button></li>
                    <li><button className="client-filter-btn" data-target="13">Arts & Gallery</button></li> */}
                </ul>
            </div>
            <div className="hm-clientele-container">
                <div className="heading-container">
                    <div className="heading mb-2">
                        <svg x="0px" y="0px" viewBox="0 0 441.3 167.3" style={{enableBackground:"new 0 0 441.3 167.3"}}>
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
                                    L23.8,157.1z"/>
                            </g>
                        </svg>
                        <h2>Our <span className="text-red">valuable</span> clientele</h2>
                    </div>
                    <h6 className="w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe eveniet assumenda, reprehenderit cumque facilis nobis mollitia aliquam sequi temporibus.</h6>
                </div>
                <div className="hm-clientele-filter-wrapper w-100">
                    <div className="hm-clientele-filter-bigbox show w-100" id="hm-clientele-filter-bigbox-corporates">
                        <div className="scroller">
                            <div className="row gap-row">
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jindal-stainless.png" alt="Jindal Stainless" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Jindal Stainless</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jindal-defence.png" alt="Jindal Defence & Aerospace" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Jindal Defence & Aerospace</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jindal-advance-materials.png" alt="Jindal Advance Materials" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Jindal Advance Materials</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/makestainless.png" alt="Make Stainless" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Make Stainless</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jsl-global-commodities.png" alt="JSL Global Commodities" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>JSL Global Commodities</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/j-hind-taurus.png" alt="J Hind Taurus" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>J Hind Taurus</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/luthra-group.png" alt="Luthra Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Luthra Group</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/capital-league.png" alt="Capital League" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Capital League</h5>
                                                <p>Consultancy</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/nexco.png" alt="Nexco Pharma" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Nexco Pharma</h5>
                                                <p>Healthcare</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jvpd.png" alt="J-VPD" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>J-VPD</h5>
                                                <p>Healthcare</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/supafood.png" alt="Supa Food" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Supa Food</h5>
                                                <p>Food</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/laduree.png" alt="Laduree" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Laduree</h5>
                                                <p>Food</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/kadaknath-india.png" alt="Kadaknath India" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Kadaknath India</h5>
                                                <p>Food</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/affirmative.png" alt="Affirmative" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Affirmative</h5>
                                                <p>Consultancy</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/rspl.png" alt="RSPL" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>RSPL</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/gepil.png" alt="GGPIL" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>GGPIL</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/pratap-gun-house.jpg" alt="Pratap Gun House" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Pratap Gun House</h5>
                                                <p>Industry</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/som-extracts.png" alt="Som Extracts" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Som Extracts</h5>
                                                <p>Fashion & Beauty</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ikta-aromatics.png" alt="Ikta Aromatics" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Ikta Aromatics</h5>
                                                <p>Fashion & Beauty</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/amrisha-salon.png" alt="Amrisha Salon" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Amrisha Salon</h5>
                                                <p>Fashion & Beauty</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/bright-life-recruitment.jpg" alt="Bright Life Recruitment" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Bright Life Recruitment</h5>
                                                <p>Consultancy</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/building-material-reporter.png" alt="Building Material Reporter" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Building Material Reporter</h5>
                                                <p>Blogs</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/lifestyle-insider.jpg" alt="Lifestyle Insider" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Lifestyle Insider</h5>
                                                <p>Blogs</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/aliya-charitable-trust.png" alt="Aliya Charitable Trust" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Aliya Charitable Trust</h5>
                                                <p>NGO</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/srijan-ek-soch.jpg" alt="Srijan Ek Soch" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Srijan Ek Soch</h5>
                                                <p>NGO</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ck-israni-foundation.png" alt="CK Israni Foundation" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>CK Israni Foundation</h5>
                                                <p>NGO</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/saints-art.png" alt="Saints Art" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Saints Art</h5>
                                                <p>Arts & Gallery</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ngma.png" alt="NGMA" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>NGMA</h5>
                                                <p>Arts & Gallery</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/atulyam.png" alt="Atulyam by Rana" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Atulyam by Rana</h5>
                                                <p>Hospitality</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/the-galgotias-hotel.png" alt="The Galgotias Hotel" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>The Galgotias Hotel</h5>
                                                <p>Hospitality</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/hyphen-hotels.jpg" alt="Hyphen Hotels" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Hyphen Hotels</h5>
                                                <p>Hospitality</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hm-clientele-filter-bigbox w-100" id="hm-clientele-filter-bigbox-realestate">
                        <div className="scroller">
                            <div className="row gap-row">
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/dlf.png" alt="DLF" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>DLF</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/m3m.png" alt="M3M" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>M3M</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/tarc.png" alt="TARC"/></div>
                                        <div className="side face">
                                            <article>
                                                <h5>TARC</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/max.png" alt="Max Estates" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Max Estates</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/godrej.png" alt="Godrej" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Godrej</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/lodha.png" alt="Lodha Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Lodha Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/LandT.png" alt="L&T Realty" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>L&T Realty</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/bestech.png" alt="Bestech" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Bestech</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/paras-buildtech.jpeg" alt="Paras Buildtech" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Paras Buildtech</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/suncity-projects.png" alt="Suncity Projects" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Suncity Projects</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/gaurs.png" alt="Gaurs Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Gaurs Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/mahagun.jpg" alt="Mahagun India" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Mahagun India</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/supertech.png" alt="Supertech" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Supertech</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/bhutani.png" alt="Bhutani Infra" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Bhutani Infra</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/prestige.jpg" alt="Prestige Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Prestige Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/essel.png" alt="Essel Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Essel Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/gaur-city-mall.png" alt="Gaur City Mall" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Gaur City Mall</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/logix-city-center.jpg" alt="Logix City Center" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Logix City Center</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/mahagun-mmillennia.png" alt="Mahagun Mmillennia" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Mahagun Mmillennia</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/mahagun-marinawwalk.png" alt="Mahagun Marina Wwalk" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Mahagun Marina Wwalk</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/hypernova.png" alt="Hypernova" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Hypernova</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/fun-republic.png" alt="Fun Republic" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Fun Republic</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/kw-delhi6.png" alt="KW Delhi 6" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>KW Delhi 6</h5>
                                                <p>Mall</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/pks.png" alt="PKS Buildmart" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>PKS Buildmart</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jainco.png" alt="Jainco Ltd." /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Jainco Ltd.</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/hemisphere.png" alt="The hemisphere" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>The Hemisphere</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jewel-of-india.png" alt="Jewel Of India" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Jewel Of India</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/joi-horizon.png" alt="Horizon" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Horizon</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ansal-api.jpg" alt="Ansal API" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Ansal API</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/3c.jpg" alt="The 3C" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>The 3C</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/alphacorp.png" alt="alphacorp" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Alphacorp</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ametek.png" alt="ametek" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Ametek</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/artham-group.png" alt="Artham Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Artham Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/bdi-group.png" alt="BDI Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>BDI Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ck-israni-group.jpg" alt="CK Israni Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>CK Israni Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/krishna-apra.png" alt="Kishna Apra" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Kishna Apra</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/kw-group.png" alt="KW Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>KW Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/orris.jpg" alt="Orris" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Orris</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/rajdarbar-realty.png" alt="Rajdarbar Realty" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Rajdarbar Realty</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/rise-projects.png" alt="Rise Projects" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Rise Projects</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/rp-group.png" alt="RP Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>RP Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/santur.gif" alt="Santur Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Santur Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/silverglades.png" alt="Silverglades" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Silverglades</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/ss-group.jpg" alt="SS Group" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>SS Group</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/supernova.png" alt="Supernova" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Supernova</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/the-bungalows.png" alt="The Bungalows" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>The Bungalows</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/vn-buildtech.png" alt="VN Buildtech" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>VN Buildtech</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/workbox.png" alt="Workbox" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Workbox</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/mg-housing.png" alt="MG Housing" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>MG Housing</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/delhi1.png" alt="Delhi1" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Delhi1</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/abl.jpg" alt="ABL" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>ABL</h5>
                                                <p>Real Estate</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hm-clientele-filter-bigbox w-100" id="hm-clientele-filter-bigbox-education">
                        <div className="scroller">
                            <div className="row gap-row">
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/dps-mathuraroad.png" alt="DPS Mathuraroad" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>DPS Mathura Road</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/dps-gbn.png" alt="DPS Gurgaon" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>DPS Gurgaon</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/dps-gbn.png" alt="DPS GBN" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>DPS GBN</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/suncity-school-54.png" alt="Suncity School" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Suncity School</h5>
                                                <p>Gurugram</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/suncity-school-37d.png" alt="Suncity School Sec-37D" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Suncity School 37D</h5>
                                                <p>Sec-37D, Gurugram</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/suncity-school-45.png" alt="Suncity School Sec-45" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Suncity School 45</h5>
                                                <p>Sec-45, Gurugram</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/asn.png" alt="ASN" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>ASN</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/lotus-valley-gurgaon.png" alt="Lotus Valley Gurgaon" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Lotus Valley Gurgaon</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/lotus-valley-noida.png" alt="Lotus Valley Noida" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Lotus Valley Noida</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/imperial-heritage.png" alt="Imperial Heritage School" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Imperial Heritage School</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/galgotias-university.jpg" alt="Galgotias University" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Galgotias University</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/galgotias-college.jpg" alt="Galgotias College" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Galgotias College</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/galgotias-university-alumni.png" alt="Galgotias University Alumni" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Galgotias University Alumni</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/op-jindal.webp" alt="OP Jindal University" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>OP Jindal University</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/fiitjee.png" alt="FIITJEE" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>FIITJEE</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/entab.png" alt="Entab" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Entab</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/dps-edge.png" alt="DPS International Edge" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>DPS International Edge</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/dps-jaipur.png" alt="DPS Jaipur" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>DPS Jaipur</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/mmi.png" alt="Modern Montessori International" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Modern Montessori International</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/yhs.png" alt="Young Horizon School" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Young Horizon School</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/eurokids.png" alt="Eurokids" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Eurokids</h5>
                                                <p>Education</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/bright-life-recruitment.jpg" alt="Bright Life Recruitment" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Bright Life Recruitment</h5>
                                                <p>Consultancy</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hm-clientele-filter-bigbox w-100" id="hm-clientele-filter-bigbox-personal">
                        <div className="scroller">
                            <div className="row mx-0">
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/prreeti-kumar.png" alt="Prreeti Kumar" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Prreeti Kumar</h5>
                                                <p>Fashion & Beauty</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/jaspreet-bindra.jpg" alt="Dr Jaspreet Bindra" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Dr Jaspreet Bindra</h5>
                                                <p>Personal</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/vidur-bharadwaj.jpg" alt="Vidur Bharadwaj" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Vidur Bharadwaj</h5>
                                                <p>Personal</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-sm-4 hm-clients-box">
                                    <section>
                                        <div className="front face"><img src="https://ecis.in/ecorp-react/images/suneel-galgotia.png" alt="Suneel Galgotia" /></div>
                                        <div className="side face">
                                            <article>
                                                <h5>Suneel Galgotia</h5>
                                                <p>Personal</p>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Clients
