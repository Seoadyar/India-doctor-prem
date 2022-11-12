import React from 'react'
import Navibar from "./Navibar";
import '../css/Home.css';
import banner from '../Assests/banner.mp4'
import WhyChooseUsSquare from '../Assests/WhyChooseUsSquare.jpg'
import s_icons from '../Assests/s_icons.png'
import { TbWorld } from 'react-icons/tb'
import {HiPhone} from 'react-icons/hi'
import CountUp from "react-countup";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

 

function Home() {


    return (
        <div>

            {/* ph number */}
            <div className="ph_cont">
                <div className="ph_left">
                    <p><HiPhone className='nav_ph_icon'/>+91 9360375911</p>
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
                        <p> <CountUp duration={2} className="counter" end="50" /></p>
                        <p>YEAR OF EXPERIANCE</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={2} className="counter" end="134500" /></p>
                        <p>SMILES TRANSFORMED</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={2} className="counter" end="6589" /></p>
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

                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
                        <p>The experience, technological expertise, and skill in All On 4 implants.</p>
                    </div>
                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
                        <p>Certified medical professionals and reliant clinics.</p>
                    </div>
                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
                        <p>Your whole medical care and diagnostics at one location.</p>
                    </div>
                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
                        <p>Streamlined approach with backup plans built in.</p>
                    </div>
                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
                        <p>We recommend services even for weak or thin jawbones.</p>
                    </div>
                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
                        <p>Alternatives for durable Zirconia-Porcelain that are economical.</p>
                    </div>
                    <div className="abt_card" data-aos="flip-left">
                        <img src={WhyChooseUsSquare} />
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
                    <div className='vlog_1 ' data-aos="fade-left">
                        <iframe className='main_y_m' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='vlog_1_main'  data-aos="fade-right">
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



                </div>
            </div>


            {/* Specialities */}
            <div className="specs_title">
                <h1 >Specialities</h1>
                <p></p>
            </div>



            <div className="specs_cont" >
                <div className="specs_main_cont" >
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Dental Implants</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Zygoma Implants</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>All-On-4 Implant Treatment</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Smile Design</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Invisalign</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Self Ligating Braces</p>
                    </div><div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Invisible Lingual Braces</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Ceramic & Metal Braces</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Teeth Whitening</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Porcelain Veneers</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Root Canal Treatment</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Gum Treatment</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Kids Dentistry</p>
                    </div>
                    <div className="s_icon_cont">
                        <img src={s_icons} />
                        <p>Sleep Apnoea & Snoring</p>
                    </div>
                </div>
            </div>







            {/* Testimonials */}

            <div className="testi_cont">
                <div className="testi_main_cont">
                    <Swiper
                    data-aos="flip-up"
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="testi_swip_cont">
                                <p className="testi_title">Client's <span className="cli_txt">Speak</span></p>
                                <div className="testi_content">
                                    <p>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                </div>
                                <p className="cli_name"><i>- Raj</i></p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_swip_cont">
                                <p className="testi_title">Client's <span className="cli_txt">Speak</span></p>
                                <div className="testi_content">
                                    <p>"Dr Prem Alex is specialist in All-On-4 and All-On-6 implantation. Overall, my experience was very good with Apollo Dental OMR"</p>
                                </div>
                                <p className="cli_name"><i>- Bala</i></p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_swip_cont">
                                <p className="testi_title">Client's <span className="cli_txt">Speak</span></p>
                                <div className="testi_content">
                                    <p>"My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them"</p>
                                </div>
                                <p className="cli_name"><i>- Anu</i></p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_swip_cont">
                                <p className="testi_title">Client's <span className="cli_txt">Speak</span></p>
                                <div className="testi_content">
                                    <p>"I am very satisfied with the All-On-6 implants. All the staff here were very kind and caring to
                                        me. Dr. Prem Alex Lawrence was very skilled and handled my case very well"</p>
                                </div>
                                <p className="cli_name"><i>- Moganambal</i></p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_swip_cont">
                                <p className="testi_title">Client's <span className="cli_txt">Speak</span></p>
                                <div className="testi_content">
                                    <p>"I was looking to finalize a good Dentist for my implantation, through one of my friends' references I met Dr. Prem Alex from Apollo Dental OMR. His treatment for All-on-4 implantation was well planned and very comfortable."</p>
                                </div>
                                <p className="cli_name"><i>- Nagalatha</i></p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>




        </div>
    )
}

export default Home;