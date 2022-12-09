import React from 'react';
import { Box } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMaps from './Maps/GoogleMaps';
import ContactImage from '../Assests/contact.jpg';
import map1 from '../Assests/map1.png'
import map2 from '../Assests/map2.png'
import map3 from '../Assests/map3.png'

function Contact() {
    return (
        <div>
            <div className='page-container py-5'>
                <div className='contact'>
                    <div className="text-center">
                        <h3 className='font-weight-bold primary'>Contact Us</h3>
                        <div>Get your Consultation Done</div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-6 col-sm-6 mb-4'>
                            <h4 className='font-weight-bold mt-4 secondary'>Operating Hours</h4>
                            <div>Sunday - Saturday : 9:00 am to 9:00 pm</div>
                            <div>Appointments can also be made <span className='font-weight-bold'>online</span> or via <span className='font-weight-bold'>email</span> at any time.</div>
                            <div>
                                <span className='font-weight-bold'>Whatsapp: <a href="https://wa.me/918939111172" target="_blank" rel="noreferrer">+91 89391 11172</a></span>
                            </div>
                            <div>
                                <span className='font-weight-bold'>Email: <a href="mailto:apollodental@premolar.org" target="_blank" rel="noreferrer">apollodental@premolar.org</a></span>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-6 mb-4 d-none d-md-block'>
                            <Box
                                component="img"
                                className="rounded"
                                sx={{ width: "100%", height: "250px", objectFit: "cover" }}
                                src={ContactImage}
                                alt="contact_us"
                            />
                        </div>
                    </div>

                    <h4 className='mt-4 font-weight-bold text-center primary'>Address</h4>
                    <div className='card shadow'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold secondary'>Apollo Dental Navalur</h5>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 mb-2'>
                                    <FaMapMarkerAlt className="primary mb-2" style={{ fontSize: "30px" }} />
                                    <div>House of Hiranandani</div>
                                    <div>Unit #2 & 3, Gateway House,</div>
                                    <div>5/63, OMR,</div>
                                    <div>Egattur Village, Thalambur Post,</div>
                                    <div>Chennai - 600130</div>
                                    <div><a href="tel:+91 89391 11172" target="_blank" rel="noreferrer">+91 89391 11172</a></div>
                                </div>
                                <div className='col-md-7 col-lg-8'>
                                    <a href='https://www.google.com/maps/place/Navalur+Toll+Plaza/@12.8398392,80.227492,17.79z/data=!4m22!1m16!4m15!1m6!1m2!1s0x3a525e1f5da86397:0x21092f216ee26e47!2sChennai+International+Airport,+Airport+Rd,+Meenambakkam,+Chennai,+Tamil+Nadu+600027!2m2!1d80.1708668!2d12.994112!1m6!1m2!1s0x3a525a5f164ab91b:0xfa22488837cc2a80!2sHouse+of+Hiranandani+Edina+Egattur,+Unit+6,+5%2F63+Old+Mahapalipuram+Road,+Opp+Sipcot+IT+Park,+Egattur+Village,,+Padur+P.O.,+Kelambakkam,+via+Kanchipuram+Dist.,+Chennai,+Tamil+Nadu+600130!2m2!1d80.2331607!2d12.8360688!3e0!3m4!1s0x3a525beeee8f6465:0x2c19791995e7470a!8m2!3d12.8396567!4d80.2276803' target='_blank'>
                                        <img src={map1} style={{ borderRadius: "5px", width: "100%", height: "230px", objectFit: "cover" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card shadow mt-4'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold secondary'>Apollo Dental Thoraipakkam</h5>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 mb-2'>
                                    <FaMapMarkerAlt className="primary mb-2" style={{ fontSize: "30px" }} />
                                    <div>#5, Vinayagam Avenue,</div>
                                    <div>Okkiyam, Thoraipakkam,</div>
                                    <div>OMR,</div>
                                    <div>Chennai - 600097</div>
                                    <div><a href="tel:+91 89391 11172" target="_blank" rel="noreferrer">+91 89391 11172</a></div>
                                </div>
                                <div className='col-md-7 col-lg-8'>
                                   <a href='https://www.google.com/maps/dir/Chennai+International+Airport,+Airport+Road,+Meenambakkam,+Chennai,+Tamil+Nadu/Apollo+Dental+OMR+(Previously+Gold+Dental+),+No.5,+Vinayagam+Avenue,+Okkiyam+Thoraipaakam,+Near+CTS+and+Aasife+Hotel,+Chennai,+Tamil+Nadu+600097/@12.9275911,80.229958,19.04z/data=!3m1!5s0x3bcb93ee42cc7eeb:0xd6267f45bc7c4c02!4m14!4m13!1m5!1m1!1s0x3a525e1f5da86397:0x21092f216ee26e47!2m2!1d80.1708668!2d12.994112!1m5!1m1!1s0x3a525c58ca587d35:0xa0626366bff17897!2m2!1d80.2307114!2d12.9273544!3e0' target='_blank' >
                                   <img src={map2} style={{ borderRadius: "5px", width: "100%", height: "230px", objectFit: "cover" }} />
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card shadow mt-3'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold secondary'>Apollo Dental Gachibowli</h5>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 mb-2'>
                                    <FaMapMarkerAlt className="primary mb-2" style={{ fontSize: "30px" }} />
                                    <div>3rd Floor, Plot #20 Telecom Nagar,</div>
                                    <div>Opp. South India Shopping Mall</div>
                                    <div>Gachibowli,</div>
                                    <div>Egattur Village, Thalambur Post,</div>
                                    <div>Hyderabad - 500032</div>
                                    <div>Telangana</div>
                                    <div><a href="tel:+91 89391 11172" target="_blank" rel="noreferrer">+91 89391 11172</a></div>
                                </div>
                                <div className='col-md-7 col-lg-8'>
                                   <a href='https://www.google.com/maps/place/Prakash+Lights/@17.4320883,78.3625863,15.54z/data=!4m5!3m4!1s0x3bcb937086cb63e7:0xec549070c1bb6988!8m2!3d17.4350164!4d78.3675687?hl=en-IN' target='_blank'>
                                   <img src={map3} style={{ borderRadius: "5px", width: "100%", height: "230px", objectFit: "cover" }} />
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;