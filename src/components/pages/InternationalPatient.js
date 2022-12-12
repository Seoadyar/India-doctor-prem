import React from 'react';
import Slider from "react-slick";
import { FaUserCircle } from 'react-icons/fa';
import TestimonialText from '../Json/TestimonialText.json';
import Phases_involved from '../Assests/Tourism/Phases_involved.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import '../css/Temp.css'


// ------turisum imgaes------------
// ----------Food---------
import food1 from '../Assests/Tourism/Food/food1.jpg'
import food2 from '../Assests/Tourism/Food/food2.jpg'
import food3 from '../Assests/Tourism/Food/food3.png'
import food4 from '../Assests/Tourism/Food/food4.jpg'
import food5 from '../Assests/Tourism/Food/food5.jpg'
import food6 from '../Assests/Tourism/Food/food6.jpg'
//---------historical--------------
import his1 from '../Assests/Tourism/Historical Buidings/his1.jpg'
import his2 from '../Assests/Tourism/Historical Buidings/his2.jpg'
import his3 from '../Assests/Tourism/Historical Buidings/his3.jpg'
import his4 from '../Assests/Tourism/Historical Buidings/his4.jpg'
import his5 from '../Assests/Tourism/Historical Buidings/his5.jpg'
//---------- religion------------
import rel1 from '../Assests/Tourism/Religious Places/rel1.png'
import rel2 from '../Assests/Tourism/Religious Places/rel2.jpg'
import rel3 from '../Assests/Tourism/Religious Places/rel3.jpg'
//----------shop------------
import shop1 from '../Assests/Tourism/Shopping/shop1.jpg'
import shop2 from '../Assests/Tourism/Shopping/shop2.jpg'
import shop3 from '../Assests/Tourism/Shopping/shop3.jpg'
import shop4 from '../Assests/Tourism/Shopping/shop4.jpg'
import shop5 from '../Assests/Tourism/Shopping/shop5.jpg'
//----------things to do-------------
import things1 from '../Assests/Tourism/Things to do/things1.jpg'
import things2 from '../Assests/Tourism/Things to do/things2.jpg'
import things3 from '../Assests/Tourism/Things to do/things3.jpg'
import things4 from '../Assests/Tourism/Things to do/things4.jpg'
import things5 from '../Assests/Tourism/Things to do/things5.jpg'


import '../css/InternationalPatient.css';

function walkThroughContent() {
  return (
    <div data-aos="fade-up">
      <div className='intern_pat_cont1 intern_pat_cont1_videoT'>
        <div className='intern_pat_cont12'>
          <h1 className='text-center font-weight-bold primary'>International Patient Process: A Walk Through</h1>
          <p>We understand that coming to a foreign land and getting life saving care can be intimidating. We offer you premium dental treatments at moderate costs. To help our international patients have a streamlined and easy experience we have put together an easy patient process that will make their treatment and stay safe and pleasant. We provide end-to-end care from the time you contact us. </p>
          <p>Our dentists will call you and assess your teeth and gums using Zoom, Skype, and email. After that, we can develop a preliminary treatment plan, and you can arrange to come see us. When necessary, our staff will collect you up from the airport, shuttle you to your hotel, and then drop you at our dental clinic. After your arrival, we discuss your travel alternatives based on the treatment plan for you and your family members or guests that accompany you.</p>
        </div>
      </div>

      <h1 className='intern_pat_cont2_title'>Phases involved </h1>
      <div className='intern_pat_cont2'>

        <img src={Phases_involved} alt="patients" />
      </div>
    </div>
  )
}

function tourismContent() {
   
  return (
    <div data-aos="fade-up">
      {/* <h2 className='mt-5 text-center font-weight-bold primary'>Tourism</h2>
      <h4 className=' mt-2 text-center font-weight-bold secondary'>As the saying goes 'Atithi Devo Bhava', guests are our Gods in India.</h4>
      <p>Chennai is the cultural hub of the west and is often considered as the gateway to the south of India. It houses the Tamil film industry, a scenic coastline with amazing tropical beaches, amazing foods and was even named the "hottest" city by the BBC. In 2017, UNESCO Creative Cities Network (UCCN) listed chennai for its diverse and rich musical tradition.</p>
      <p>Here are some amazing spots you can visit while you are here in Chennai.</p> */}
      <div className='intern_pat_cont1 tourism1'>
        <div className='intern_pat_cont12'>
          <h1 className='text-center font-weight-bold primary '>Tourism</h1>
          <p className='intern_pat_cont12_text1'>As the saying goes ‘Atithi Devo Bhava’, guests are our Gods in India.</p>
          <p>Chennai is the cultural hub of the west and is often considered as the gateway to the south of India. It houses the Tamil film industry, a scenic coastline with amazing tropical beaches, amazing foods and was even named the "hottest" city by the BBC. In 2017, UNESCO Creative Cities Network (UCCN) listed chennai for its diverse and rich musical tradition.</p>

          <p className='intern_pat_cont12_text2'>Chennai attracts 40% of India’s medical tourists and is much sought after due to its reasonable treatment costs, no. of multispeciality hospitals, and short waiting period.</p>
          <p className='intern_pat_cont12_text2'>This is your best chance to visit one of the most iconic cities in India with a rich cultural heritage, history and beaches. </p>
          <p className='intern_pat_cont12_text2'>The below is simply a foretaste to your discovery of Chennai.</p>
        </div>
      </div>

          {/* Discover Chennai */}
          <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>Discover Chennai</h1>
                <p></p>
            </div>

            <div className='discover_cont'>
                <div className='discover_main_cont'>
                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={food1} /></SwiperSlide>
                                <SwiperSlide><img src={food2} /></SwiperSlide>
                                <SwiperSlide><img src={food3} /></SwiperSlide>
                                <SwiperSlide><img src={food4} /></SwiperSlide>
                                <SwiperSlide><img src={food5} /></SwiperSlide>
                                <SwiperSlide><img src={food6} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Food</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={his1} /></SwiperSlide>
                                <SwiperSlide><img src={his2} /></SwiperSlide>
                                <SwiperSlide><img src={his3} /></SwiperSlide>
                                <SwiperSlide><img src={his4} /></SwiperSlide>
                                <SwiperSlide><img src={his5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Historical Buidings</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={rel1} /></SwiperSlide>
                                <SwiperSlide><img src={rel2} /></SwiperSlide>
                                <SwiperSlide><img src={rel3} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Religious Places</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={shop1} /></SwiperSlide>
                                <SwiperSlide><img src={shop2} /></SwiperSlide>
                                <SwiperSlide><img src={shop3} /></SwiperSlide>
                                <SwiperSlide><img src={shop4} /></SwiperSlide>
                                <SwiperSlide><img src={shop5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Shopping</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={things1} /></SwiperSlide>
                                <SwiperSlide><img src={things2} /></SwiperSlide>
                                <SwiperSlide><img src={things3} /></SwiperSlide>
                                {/* <SwiperSlide><img src={things4} /></SwiperSlide> */}
                                <SwiperSlide><img src={things5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Things to do</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>


       
    </div>
  )
}

function testimonialContent() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className='intern_pat_cont1 inter_pat_testimo' data-aos="fade-up">
      <div className='intern_pat_cont12'>
        <h2 className='mt-5 text-center font-weight-bold primary inter_pat_testimo_title'>Testimonials</h2>
        <div>
          <Slider {...settings}>
            {TestimonialText.map((data, i) => {
              return (
                <div key={i}>
                  <div className='p-3'>
                    <div className='text-center'>
                      <FaUserCircle className="text-black " style={{ fontSize: "50px" }} />
                      <h4 className='secondary mt-2'>{data.name}</h4>
                    </div>
                    <div className='overflow-auto' style={{ maxHeight: "150px" }}>
                      <p>{data.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

function InternationalPatient() {
  return (
    <React.Fragment>
      <video src='https://firebasestorage.googleapis.com/v0/b/apollo-dental.appspot.com/o/International_Patients.mp4?alt=media&token=9bf2a845-76a8-4f97-b5d5-4a38ea0a461c' style={{ width: "100%", height: "100%" }} autoPlay loop controls ></video>
      <div>
        <div>
          {walkThroughContent()}
          {tourismContent()}
          {testimonialContent()}
        </div>
      </div>
    </React.Fragment>
  )
}

export default InternationalPatient