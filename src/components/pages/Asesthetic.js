import React from 'react'
import on6two from '../Assests/on6two.png'
import on6three from '../Assests/aesthetic-dentist.jpg'
import Aimplant from '../Assests/aesthetic-dentist-1.png'


import '../css/AllOn6.css'
import { Helmet } from 'react-helmet'
function Asesthetic() {
    return (
        <div>
            <Helmet>
                <title>
                Aesthetic Dental Implants | Cosmetic Dental Treatment in India
                </title>
                <meta name='description' content='Our aesthetic dentists will take care of tooth implants, dentures, dental crowns, veneers, bridges, and teeth whitening.'/>
            </Helmet>
            <div className='on6_img_cont Asesthetic_banner_img'>
                <img data-aos="fade-up" src={Aimplant} alt='Aesthetic dental implants in Chennai' />
                <div className='on6_img_sub_cont1 '>
                    <div className='on6_img_sub_cont'>
                        {/* <h1 className='on6_title1'>Aesthetic Implants</h1>
                        <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
                    </div>
                </div>
            </div>


            <div className='on6_div11_cont asesth_on6_div11_cont'>
                <div className='on6_div1_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h1>Aesthetic Dental Implants</h1>
                        <p></p>
                    </div>

                    <div className='on6_div1_main_cont'>
                        <div className='on6_div1_main_cont_1'>
                            <img data-aos="fade-up" src={on6two} />
                        </div>
                        <div className='on6_div1_main_cont_2'>
                            <p data-aos="fade-up">The consensus is that all dental procedures are equivalent and all dentistry is dentistry. Right? Wrong! Well, not necessarily, as numerous dental specialties have evolved from conventional dentistry. Each of these varieties has a specific purpose, and two of these branches are aesthetic dentistry and cosmetic dentistry. </p>
                            <p data-aos="fade-up">Although the terms are frequently used interchangeably and there are differences between the two, each of these styles is distinct despite the confusion. It is important that you know these differences to ensure you are seeing the correct dentist for your needs.</p>
                        </div>
                    </div>

                </div>
            </div>



            <div className='on6_div22_cont ases_2_on6_div22_cont'>
                <div className='on6_div2_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h2>What does an aesthetic dentist do?</h2>
                        <p></p>
                    </div>

                    <div className='on6_div2_main_cont'>

                        <div className='on6_div2_main_cont_2'>
                            <p data-aos="fade-up">A specialist in implant dentistry is also referred to as an aesthetic dentist. This is so because they are dental implant experts</p>
                            <p data-aos="fade-up">An implant that can replace a missing tooth is referred to as a dental implant. Dental implants are so advanced in today's society that it is difficult to tell them apart from natural teeth because they resemble real teeth. Many people are learning about dental implants and discovering that they do not need to live with smile gaps, especially if they have financing options.</p>
                            <p data-aos="fade-up">In the case of a trauma or impaction of the anterior tooth, the same should be extracted by the implantologist and preferably an implant placed on the same day or within 48 hours to avoid bone resorption. By doing so, you will not only be able to save the bone but the gums too! The crown will be fixed on the same day and allowed to heal.</p>
                        </div>
                        <div className='on6_div2_main_cont_1'>
                            <img data-aos="fade-up" src={on6three} alt='Aesthetic dental implants in India' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Asesthetic