import React, { useState } from 'react'
import Navibar from "./Navibar";
import '../css/Home.css';
import banner from '../Assests/banner.mp4'

import hos3 from '../Assests/hos3.jpg'
import WhyChooseUsSquare from '../Assests/WhyChooseUsSquare.jpg'
import s_icons from '../Assests/s_icons.png'
import { TbWorld } from 'react-icons/tb'
import { HiPhone } from 'react-icons/hi'
import CountUp from "react-countup";


 


// material UI 
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ProBar from './progressbar-loader/ProBar';
import TestiMonialSlider from '../slick-slider/TestiMonialSlider';


function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (
        <div>

            {/* ph number */}
            <div className="ph_cont">
                <div className="ph_left">
                    <p><HiPhone className='nav_ph_icon' />+91 9360375911</p>
                    <p>karthik5112001@gmail.com</p>
                </div>
                <div className="ph_right">
                    <TbWorld />
                </div>
            </div>


            {/* navbar */}
            <div className="nav_home_cont">
                <div className="nav_main_home" >
                    <Navibar />
                </div>

            </div>

            {/* slider */}
            <div class="banner_slider" >
                <video width="320" height="240" autoPlay muted>
                    <source src={banner} type="video/mp4" />
                </video>
            </div>



            {/* countes */}
            <div className="counts_cont">
                <div className="counts_main_cont">

                    <div className="counts_1">
                        <p> <CountUp duration={2} className="counter" end="5560" /></p>

                        <p>YEAR OF EXPERIANCE</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={2} className="counter" end="5560" /></p>
                        <p>SMILES TRANSFORMED</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={2} className="counter" end="5560" /></p>
                        <p>IMPLANTS PLACED<br></br>(INCLUDING SPECIAL IMPLANTS)</p>
                    </div>


                </div>
            </div>






            {/* about us */}
            <div className="specs_title chooseUs">
                <h1 >Why Choose Us</h1>
                <p></p>
            </div>
            <div className="abt_cont">
                <div className="abt_main_cont">

                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>The experience, technological expertise, and skill in All On 4 implants.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Certified medical professionals and reliant clinics.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Your whole medical care and diagnostics at one location.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Streamlined approach with backup plans built in.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>We recommend services even for weak or thin jawbones.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Alternatives for durable Zirconia-Porcelain that are economical.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Known outcomes and high reliability.</p>
                    </div>
                </div>
            </div>



            {/* vlog */}
            <div className="specs_title vlog">
                <h1>Know more</h1>
                <p></p>
            </div>

            <div className="vlog_slider_cont">
                <div className="vlog_main_slider_cont">
                    {/* <div className='vlog_1'>
                        <iframe className='main_y_m' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='vlog_1_main'>
                        <div className='vlog_2'>
                            <p>Latest video</p>
                            <div className='vlog_2_sub'>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className='vlog_2'>
                            <p>All video</p>
                            <div className='vlog_2_sub'>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
 */}

<div class="elfsight-app-dd7f468f-5215-4875-bcc2-acfac68a5c19"></div>

                </div>
            </div>


            {/* Specialities */}
            <div className="specs_title spc_ori_title">
                <h1 >Specialties Listed</h1>
                <p></p>
            </div>



            <div className="specs_cont" >
                <div className="specs_main_cont" >
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Dental Implants</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Zygoma Implants</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>All-On-4 Implant Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Smile Design</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Invisalign</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Self Ligating Braces</p>
                    </div><div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Invisible Lingual Braces</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Ceramic & Metal Braces</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Teeth Whitening</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Porcelain Veneers</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Root Canal Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Gum Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Kids Dentistry</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Sleep Apnoea & Snoring</p>
                    </div>
                </div>
            </div>



            <div className="specs_title tes1">
                <h1 >Testimonials</h1>
                <p></p>
            </div>

            {/* hospital images */}

            <div className='scrol_img_cont'>
                <div className='scrol_img_main_cont'>
                    <img src={hos3} />
                </div>
            </div>



            {/* Testimonials */}

            <div className="testi_cont">

                <h1>Client <span style={{ color: "#00b8f1" }}>Speak</span></h1>

                <div className="testi_main_cont">
                    <TestiMonialSlider />




                </div>
            </div>




        </div>
    )
}

export default Home;