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
import rel4 from '../Assests/Tourism/Religious Places/rel4.jpg'
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
//------ECR----------------------
import ST from '../Assests/Tourism/ECR/ST.jpg'
import M1 from '../Assests/Tourism/ECR/M1.jpg'
import SS1 from '../Assests/Tourism/ECR/SS1.jpg'
import CB1 from '..//Assests/Tourism/ECR/CB1.jpg'
import D2 from '../Assests/Tourism/ECR/D2.jpg'

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
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="fade-up">

                <SwiperSlide><img src={his1} data-aos="fade-up" /></SwiperSlide>
                <SwiperSlide><img src={his2} data-aos="fade-up" /></SwiperSlide>
                <SwiperSlide><img src={his3} data-aos="fade-up" /></SwiperSlide>
                <SwiperSlide><img src={his5} data-aos="fade-up" /></SwiperSlide>
              </Swiper>
            </div>
            <div className='discover_main_cont_one2'>
              <p data-aos="fade-up" >Historical Buidings</p>
              <p data-aos="fade-up" >Chennai is also home to colonial reminders. Some outstanding architecture includes the Fort St. George, the first English fortress in India. Chennai has its own version of the white house called Ripon Building built in honour of Lord Ripon. It currently houses the office of the Greater Chennai Corporation. This building makes for great pictures. The high court in Chennai is another beautiful building built in the Indo Sarcenic style of architecture and has magnificent painted ceilings and stained glass doors.</p>
            </div>
          </div>


          <div class="banner_slider" >

          </div>




          <div className='discover_main_cont_one'>





            <div className='discover_main_cont_one1'>


              <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="fade-up">

                <SwiperSlide><img src={rel1} /></SwiperSlide>
                <SwiperSlide><img src={rel2} /></SwiperSlide>
                <SwiperSlide><img src={rel3} /></SwiperSlide>
                <SwiperSlide><img src={rel4} /></SwiperSlide>
              </Swiper>
            </div>
            <div className='discover_main_cont_one2'>
              <p data-aos="fade-up" >Religious Places</p>
              <p data-aos="fade-up" >Chennai’s religious places are some of the world’s famous heritage structures. The Kapaleeswarar Temple, located in Mylapore, dedicated to Lord Shiva was built in the 7th Century and boasts breath-taking Dravidian-style architecture.  The Santhome Basilica is well worth a trip for any visitor to Chennai. It houses the final resting place of one of Jesus’s 12 apostles, St. Thomas. A museum attached to it houses his bone and fingerprint and other antiquities surrounding his assassination. The Madras Synagogue near Mint Street holds the last traces of Jewish presence in Chennai. The Jewish Cemetery is worth a visit for its interesting stories.  The Mughals also left their indelible mark on Chennai through the Nawab of Arcot. Locally known as Big Mosque in Triplicane is his gift. It is completely granite without the use of wood or iron.</p>
            </div>
          </div>

          <div className='discover_main_cont_one'>

            <div className='discover_main_cont_one1'>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="fade-up">
                <SwiperSlide><img src={food3} /></SwiperSlide>
                <SwiperSlide><img src={food4} /></SwiperSlide>
                <SwiperSlide><img src={food1} /></SwiperSlide>
                <SwiperSlide><img src={food6} /></SwiperSlide>
                <SwiperSlide><img src={food2} /></SwiperSlide>
                <SwiperSlide><img src={food5} /></SwiperSlide>
              </Swiper>
            </div>
            <div className='discover_main_cont_one2'>
              <p data-aos="fade-up" >Food</p>
              <p data-aos="fade-up" >The answer is always coffee in Chennai. Begin your day with filter coffee in Chennai. Have a crisp masala dosai with its accompanying South Indian dips for breakfast. At lunch time, the aroma of delectable biryanis also known as food of the Gods will summon you. Our recommendation is to succumb and take a stroll in the evening in the beach with some “sundal” or seasoned chick peas in hand. If local favourites might not be your flavour, the city is well equipped with world cuisines and all your favourite international fast food brands for when hunger strikes.</p>
            </div>
          </div>






          <div className='discover_main_cont_one'>

            <div className='discover_main_cont_one1'>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="fade-up">
                <SwiperSlide><img src={shop3} /></SwiperSlide>
                <SwiperSlide><img src={shop2} /></SwiperSlide>
                <SwiperSlide><img src={shop1} /></SwiperSlide>
                <SwiperSlide><img src={shop4} /></SwiperSlide>
                <SwiperSlide><img src={shop5} /></SwiperSlide>
              </Swiper>
            </div>
            <div className='discover_main_cont_one2'>
              <p data-aos="fade-up" >Shopping</p>
              <p data-aos="fade-up" >Shop till you drop is not just a quote when in Chennai. A variety of malls such as Phoenix Market city, VR Mall, Express Avenue etc.,  house every conceivable international brand in merchandise , food, cineplexes and entertainment zones. To get the complete local flavour try the shopping streets such as Ranganathan Street and Cotton Street for unbelievable deals .</p>
            </div>
          </div>


          <div className='discover_main_cont_one'>
            <div className='discover_main_cont_one1'>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="fade-up">
                <SwiperSlide><img src={things1} /></SwiperSlide>
                <SwiperSlide><img src={things2} /></SwiperSlide>
                <SwiperSlide><img src={things3} /></SwiperSlide>
                {/* <SwiperSlide><img src={things4} /></SwiperSlide> */}
                <SwiperSlide><img src={things5} /></SwiperSlide>
              </Swiper>
            </div>
            <div className='discover_main_cont_one2'>
              <p data-aos="fade-up" >Things to do</p>
              <p data-aos="fade-up" >Chennai offers everyone plenty of fun activities. A city known for its beaches and the second longest beach in the world Marina is perfect for walking, balloon shooting, eating fresh catch and bajjis(fried vegetable snack), horse riding and simply dipping into the ocean. The backwaters at Muttukadu, offers some spectacular boating. If you are a book lover, head to the Anna Centenary Library, a reader’s paradise for some quiet time.</p>
            </div>
          </div>

          <div className='discover_main_cont_one'>

            <div className='discover_main_cont_one1'>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="fade-up">
                <SwiperSlide><img src={ST} /></SwiperSlide>
                <SwiperSlide><img src={M1} /></SwiperSlide>
                <SwiperSlide><img src={SS1} /></SwiperSlide>
                <SwiperSlide><img src={D2} /></SwiperSlide>
                <SwiperSlide><img src={CB1} /></SwiperSlide>

              </Swiper>
            </div>
            <div className='discover_main_cont_one2'>
              <p data-aos="fade-up" >Experience ECR</p>
              <p data-aos="fade-up" >The East Coast Road originally denoted the coastal stretch between Chennai and Pondicherry. It holds some very interesting sights along the way namely the Crocodile bank, Dakshinachitra , Mahabalipuram and activities such as surfing, boating, go karting etc. Take a one day trip to experience this beautiful beach highway stretch. </p>
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