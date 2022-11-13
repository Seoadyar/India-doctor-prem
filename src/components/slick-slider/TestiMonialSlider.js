import React, { Component } from "react";
import Slider from "react-slick";
import clients from '../Assests/clients.jpg'
import './TestiMonialSlider.css'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default class TestiMonialSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>

                <Slider {...settings}>
                <div>
                        <div className="testi_content">
                            <div className='testi_img_cont'>
                                <img src={clients} />
                                <p className="cli_name">Raj</p>
                            </div>
                            <div className='testi_content_main_cont'>
                                <Box className='star_cont'>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                                <div className='cli_reviewc_main_content'>
                                    <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testi_content">
                            <div className='testi_img_cont'>
                                <img src={clients} />
                                <p className="cli_name">Raj</p>
                            </div>
                            <div className='testi_content_main_cont'>
                                <Box className='star_cont'>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                                <div className='cli_reviewc_main_content'>
                                    <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testi_content">
                            <div className='testi_img_cont'>
                                <img src={clients} />
                                <p className="cli_name">Raj</p>
                            </div>
                            <div className='testi_content_main_cont'>
                                <Box className='star_cont'>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                                <div className='cli_reviewc_main_content'>
                                    <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testi_content">
                            <div className='testi_img_cont'>
                                <img src={clients} />
                                <p className="cli_name">Raj</p>
                            </div>
                            <div className='testi_content_main_cont'>
                                <Box className='star_cont'>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                                <div className='cli_reviewc_main_content'>
                                    <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testi_content">
                            <div className='testi_img_cont'>
                                <img src={clients} />
                                <p className="cli_name">Raj</p>
                            </div>
                            <div className='testi_content_main_cont'>
                                <Box className='star_cont'>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                                <div className='cli_reviewc_main_content'>
                                    <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testi_content">
                            <div className='testi_img_cont'>
                                <img src={clients} />
                                <p className="cli_name">Raj</p>
                            </div>
                            <div className='testi_content_main_cont'>
                                <Box className='star_cont'>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                                <div className='cli_reviewc_main_content'>
                                    <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}