import React from "react";
import TDone from "../Assests/teeth-implants.png";
import TDtwo from "../Assests/tooth-in-a-day-1.png";
import { TiTick } from "react-icons/ti";
import Toothonaday from "../Assests/tooth-in-a-days.png";

import "../css/AllOn6.css";
import { Helmet } from "react-helmet";
function ToothInDay() {
  return (
    <div>
      <Helmet>
        <title>
          Teeth-In-A-Day Dental Implant | Same Day Procedure | Tooth Replacement
        </title>
        <meta
          name="description"
          content="Teeth-In-A-Day, a unique treatment for teeth replacement. Get your missing teeth fixed in one appointment with our Dental Implant Surgeon Dr.Prem Alex Lawrence."
        />
      </Helmet>
      <div className="on6_img_cont">
        <img data-aos="fade-up" src={Toothonaday} alt='Dental implants of tooth'/>
        <div className="on6_img_sub_cont1">
          <div className="on6_img_sub_cont">
            {/* <h1 className='on6_title1'>Tooth-In-a-Day</h1>
            <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
          </div>
        </div>
      </div>

      <div className="on6_div11_cont tooth_1_on6_div11_cont">
        <div className="on6_div1_cont">
          <div className="all_on_6_des_title" data-aos="fade-up">
            <h1>What is Tooth-In-a-Day?</h1>
            <p></p>
          </div>

          <div className="on6_div1_main_cont">
            <div className="on6_div1_main_cont_1">
              <img data-aos="fade-up" src={TDone} alt='Dental implants at Doctor Prem Dental clinic'/>
            </div>
            <div className="on6_div1_main_cont_2">
              <p data-aos="fade-up">
                An innovative dental implant-supported denture procedure is
                called Tooth-in-a-Day. Tooth-in-a-Day streamlines the procedure
                rather than having to remove teeth, place dental implants,
                design the denture, and then attach the denture over the course
                of several months. We will immediately place a conventional
                removable denture or an immediate load implant-retained
                removable denture in place of placing implants and asking
                patients to go months without teeth. Before we permanently
                attach the denture, you'll typically need to have it adjusted or
                replaced after your smile has healed completely.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="on6_div33_cont tooth_2_on6_div11_cont">
        <div className="on6_div3_cont">
          <div className="all_on_6_des_title" data-aos="fade-up">
            <h2>Who can go for a ‘Tooth-in-a-day’?</h2>
            <p></p>
          </div>

          <div className="on6_div3_main_cont">
            <div className="on6_div3_main_cont_2">
              <ul>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    Patients with a missing tooth or who had an extraction, can
                    go for the Tooth-In-a-Day procedure.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="on6_div22_cont tooth_3_on6_div22_cont">
        <div className="on6_div2_cont">
          <div className="all_on_6_des_title" data-aos="fade-up">
            <h2>How does the procedure work?</h2>
            <p></p>
          </div>

          <div className="on6_div2_main_cont">
            <div className="on6_div2_main_cont_2">
              <p data-aos="fade-up">
                Compared to the standard implant procedure, which can take
                anywhere between four and nine months to complete,
                ‘Tooth-in-a-Day’ can provide you with all of your dental needs
                by the time you're prepared to leave our clinic. To determine
                where to place the implants, our team will first take a
                high-resolution CT scan of your jawbone structure. After the
                implants are placed, a non-removable appliance is designed to
                cover them and provide reliable function. Actually, you'll get
                two restorations most of the time. We'll start the
                ‘Tooth-in-a-day’ procedure as soon as we receive your initial,
                temporary restoration. When you come to our office, we'll take
                out any teeth that are damaged. Following that, we position the
                temporary restoration and place the dental implant posts. as
                soon as your implants.
              </p>
            </div>
            <div className="on6_div2_main_cont_1">
              <img data-aos="fade-up" src={TDtwo} alt='Dental implants in the same day'/>
            </div>
          </div>
        </div>
      </div>

      <div className="on6_div33_cont on6_footer">
        <div className="on6_div3_cont">
          <div className="all_on_6_des_title" data-aos="fade-up">
            <h2>What are the benefits of a ‘Tooth-In-a-Day’ procedure?</h2>
            <p></p>
          </div>

          <div className="on6_div3_main_cont">
            <div className="on6_div3_main_cont_2">
              <ul>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    No time spent without teeth, which retains the facial shape,
                    chewing ability, and maintaining clear speech
                  </div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    The temporary prosthetic gives extra support to the dental
                    implants fused to the jawbone
                  </div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>Patients are more comfortable with the procedure</div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>Lesser time spent on the dental chair</div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    Lesser visits to your dentist for the same treatment
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToothInDay;
