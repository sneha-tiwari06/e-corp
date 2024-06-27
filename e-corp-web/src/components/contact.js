import React, { useState } from 'react'
import Swal from 'sweetalert2';
function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        services: [],
        requirements: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        const serviceName = e.target.getAttribute('data-service-name');
        let updatedServices = [...formData.services];

        if (checked) {
            updatedServices.push({ id, servicename: serviceName });
        } else {
            updatedServices = updatedServices.filter(service => service.id !== id);
        }

        setFormData({ ...formData, services: updatedServices });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/submit', {
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
                setFormData({
                    username: '',
                    email: '',
                    phone: '',
                    services: [],
                    requirements: ''
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to send query.',
                });
                setFormData({
                    username: '',
                    email: '',
                    phone: '',
                    services: [],
                    requirements: ''
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send query.',
            });
            setFormData({
                username: '',
                email: '',
                phone: '',
                services: [],
                requirements: ''
            });
        }
    };
    return (
        <div>
            <div className="w-100 padding">
                <div className="container-fluid">
                    <div className="heading py-0 mx-auto"><h2>Get In <span className="text-red">Touch</span></h2></div>
                    <div className="getInTouchForm">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-4 field">
                                    <input type="text" name="username" placeholder="Name*" value={formData.username}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="col-sm-4 field">
                                    <input type="text" name="email" placeholder="Work Email*" value={formData.email}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="col-sm-4 field">
                                    <input type="text" name="phone" placeholder="Phone*" value={formData.phone}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="col-sm-12 my-4">
                                    <p><b>How soon do you want to start the project?*</b></p>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"  id="week1"
                                                    data-service-name="Within 8 weeks" 
                                                    checked={formData.services.some(service => service.id === 'week1')}
                                                    onChange={handleCheckboxChange}/>
                                                <label className="form-check-label" for="week1">Within 8 weeks</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"  id="week2"
                                                    data-service-name="More Than 8 weeks" 
                                                    checked={formData.services.some(service => service.id === 'week2')}
                                                    onChange={handleCheckboxChange}/>
                                                <label className="form-check-label" for="week2">More than 8 weeks</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-4">
                                    <p><b>Which services are you looking for?*</b></p>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="services"
                                                    id="service1"
                                                    data-service-name="Web Development" 
                                                    checked={formData.services.some(service => service.id === 'service1')}
                                                    onChange={handleCheckboxChange} />
                                                <label className="form-check-label" for="service1">Web Development</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="services"
                                                    id="service2"
                                                    data-service-name="Mobile App Development" 
                                                    checked={formData.services.some(service => service.id === 'service2')}
                                                    onChange={handleCheckboxChange} />
                                                <label className="form-check-label" for="service2">Mobile App Development</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="services"
                                                    id="service3"
                                                    data-service-name="Digital Marketing" 
                                                    checked={formData.services.some(service => service.id === 'service3')}
                                                    onChange={handleCheckboxChange} />
                                                <label className="form-check-label" for="service3">Digital Marketing</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="services"
                                                    id="service4"
                                                    data-service-name="SEO" 
                                                    checked={formData.services.some(service => service.id === 'service4')}
                                                    onChange={handleCheckboxChange} data-target="seo" />
                                                <label className="form-check-label" for="service4">SEO</label>
                                            </div>
                                            <div className="field sub-fields" id="sub-field-seo">
                                                <label>Mention the website for which you need SEO*</label>
                                                <input type="text" name="" placeholder="Text here*" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="services"
                                                    id="service5"
                                                    data-service-name="Others" 
                                                    checked={formData.services.some(service => service.id === 'service5')}
                                                    onChange={handleCheckboxChange} data-target="others" />
                                                <label className="form-check-label" for="service5">Others</label>
                                            </div>
                                            <div className="field sub-fields" id="sub-field-others">
                                                <label>Please specify other*</label>
                                                <input type="text" name="" placeholder="Text here*" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <p><b>Share your requirements* <small style={{ color: "#999" }}>(minimum 250 characters)</small></b></p>
                                    <div className="field">
                                        <textarea name="requirements" id="" placeholder="(You can add links to your shareable materials if any)" value={formData.requirements}
                                            onChange={handleInputChange} ></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <div className="readmore center dark"><button>Submit</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact
