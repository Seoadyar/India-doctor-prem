import React, { useState } from 'react'
import '../css/Home.css';
import banner from '../Assests/banner.mp4'
import spec1 from '../Assests/spec1.jpg'
import spec2 from '../Assests/spec2.jpg'
import spec3 from '../Assests/spec3.jpg'
import spec4 from '../Assests/spec4.jpg'

import hos3 from '../Assests/hos3.jpg'
import WhyChooseUsSquare from '../Assests/WhyChooseUsSquare.jpg'
import clients from '../Assests/clients.jpg'
import s_icons from '../Assests/s_icons.png'

import CountUp from "react-countup";



// swiper js
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";



// material UI 
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TopNav from './TopNav';
import { Container } from '@mui/system';



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
                        <p> <CountUp duration={7} className="counter" start="10" end="820"/></p>

                        <p>All-On-4 Procedures Performed</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" start="10"  end="6000" /></p>
                        <p>Implants Placed</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={8} className="counter" Start="10" end="1000" /></p>
                        <p>Smiles Changed</p>
                    </div>
                </div>


            </div>
            






            {/* about us */}
            <div className="specs_title chooseUs">
                <h1 >Why Choose Us</h1>
                <p></p>
            </div>
            <div className="abt_cont" >
                <div className="abt_main_cont" >

                    <div className="abt_card" data-aos="fade-up-right">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>The experience, technological expertise, and skill in All On 4 implants.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-left">
                        <img src={WhyChooseUsSquare} data-aos="flip-left" />
                        <p>Certified medical professionals and reliant clinics.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-right">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Final teeth fixed in record time and with impeccable care(skipped this one)</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-left">
                        <img src={WhyChooseUsSquare} data-aos="flip-left" />
                        <p>Your whole medical care and diagnostics at one location.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-left">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Streamlined approach with backup plans built in.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-right">
                        <img src={WhyChooseUsSquare} data-aos="flip-left" />
                        <p>We recommend services even for weak or thin jawbones.</p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-left">
                        <img src={WhyChooseUsSquare} data-aos="flip-right" />
                        <p>Alternatives for durable Zirconia-Porcelain that are economical. </p>
                    </div>
                    <div className="abt_card" data-aos="fade-up-right">
                        <img src={WhyChooseUsSquare} data-aos="flip-left" />
                        <p>Known outcomes and high reliability.</p>
                    </div>
                </div>
            </div>



            {/* specilities stock imgages */}

            <div className='spec_stock_img_cont'>
                <div className='spec_stock_img_main_cont'>
                    <img src={spec1} />
                    {/* <img src={spec2}/>
                    <img src={spec3}/> */}
                </div>
            </div>



            {/* vlog */}
            
            <div className="specs_title vlog">
                <h1>Know more</h1>
                <p></p>
            </div>
            

            <div className="vlog_slider_cont">
                <div className="vlog_main_slider_cont">
                    <div className='vlog_1'>
                         <iframe className='main_y_m' width="800" height="200" src="https://www.youtube.com/embed/fODTy_gvJ28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className='vlog_1_main'>
                        <div className='vlog_2'>
                            <p>Latest video</p>
                            <div className='vlog_2_sub'>
                            
                            </div>
                        </div>

                        <div className='vlog_2'>
                            <p>All video</p>
                            <div className='vlog_2_sub'>
                                
                                
                                
                            </div>
                        </div>
                    </div>
          </div> 
          
          


                    
                </div>
            </div>
            


            {/* Specialities */}
            <div className="specs_title spc_ori_title">
                <h1 >Specialties</h1>
                <p></p>
            </div>



            <div className="specs_cont" >
                <div className="specs_main_cont" >
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>All-On-4 Implant Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Dental Implants</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>All-On-6 Implant Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Guided Surgeries</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Aesthetic Implants </p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Sinus Lifts </p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Tooth-on-a-Day</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <img src={s_icons} />
                        <p>Prosthesis Types </p>
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

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="testi_content">
                                <div className='testi_img_cont'>
                                    <img src={clients} />
                                    <div>
                                        <p className="cli_name">Raj</p>
                                        <Box className='star_cont'>
                                            <Rating name="read-only" value={5} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div className='testi_content_main_cont'>
                                    <div className='cli_reviewc_main_content'>
                                        <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_content">
                                <div className='testi_img_cont'>
                                    <img src={clients} />
                                    <div>
                                        <p className="cli_name">Bala</p>
                                        <Box className='star_cont'>
                                            <Rating name="read-only" value={5} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div className='testi_content_main_cont'>
                                    <div className='cli_reviewc_main_content'>
                                        <p className='cli_reviewc_content'>"Dr Prem Alex is specialist in All-On-4 and All-On-6 implantation. Overall, my experience was very good with Apollo Dental OMR"</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_content">
                                <div className='testi_img_cont'>
                                    <img src={clients} />
                                    <div>
                                        <p className="cli_name">Anu</p>
                                        <Box className='star_cont'>
                                            <Rating name="read-only" value={5} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div className='testi_content_main_cont'>
                                    <div className='cli_reviewc_main_content'>
                                        <p className='cli_reviewc_content'>"My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them"</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_content">
                                <div className='testi_img_cont'>
                                    <img src={clients} />
                                    <div>
                                        <p className="cli_name">Moganambal</p>
                                        <Box className='star_cont'>
                                            <Rating name="read-only" value={5} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div className='testi_content_main_cont'>
                                    <div className='cli_reviewc_main_content'>
                                        <p className='cli_reviewc_content'>"I am very satisfied with the All-On-6 implants. All the staff here were very kind and caring to
                                            me. Dr. Prem Alex Lawrence was very skilled and handled my case very well"</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_content">
                                <div className='testi_img_cont'>
                                    <img src={clients} />
                                    <div>
                                        <p className="cli_name">Raj</p>
                                        <Box className='star_cont'>
                                            <Rating name="read-only" value={5} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div className='testi_content_main_cont'>
                                    <div className='cli_reviewc_main_content'>
                                        <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testi_content">
                                <div className='testi_img_cont'>
                                    <img src={clients} />
                                    <div>
                                        <p className="cli_name">Nagalatha</p>
                                        <Box className='star_cont'>
                                            <Rating name="read-only" value={5} readOnly />
                                        </Box>
                                    </div>
                                </div>
                                <div className='testi_content_main_cont'>
                                    <div className='cli_reviewc_main_content'>
                                        <p className='cli_reviewc_content'>"I was looking to finalize a good Dentist for my implantation, through one of my friends' references I met Dr. Prem Alex from Apollo Dental OMR. His treatment for All-on-4 implantation was well planned and very comfortable."</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>




                    </Swiper>


                </div>
            </div>




        </div>
    )
}

export default Home;