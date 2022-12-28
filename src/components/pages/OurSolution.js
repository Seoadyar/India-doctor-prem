import React from "react";
import oursolution1 from "../Assests/doctor-prem-dental-care.png";
import BOS from "../Assests/BOS.png";
import "../css/AllOn6.css";
import { Helmet } from "react-helmet";
function OurSolution() {
  return (
    <div>
      <Helmet>
        <title>
          Dental Implant Treatment | All on 4 Implants | All on 6 Implants |
          Aligners in Chennai
        </title>
        <meta
          name="description"
          content="Book your dental appointments with us for dental implants, cosmetic dentistry & kids dental care in Chennai and across India to achieve the smile and oral health you deserve."
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>

      <div className="on6_img_cont">
        <img src={BOS} />
        <div className="on6_img_sub_cont1">
          <div className="on6_img_sub_cont">
            <h1 className="on6_title1"></h1>
            {/* <h1 className='on6_title2'>Advanced dental implantology requires a highly skilled team of doctors encompassing various dental specializations including Oral & Maxillofacial Surgery, Prosthodontics, Periodontics, Anaesthesiology and Dental Radiology. </h1> */}
          </div>
        </div>
      </div>

      <div className="on6_div11_cont oursol_on6_div11_cont ">
        <div className="on6_div1_cont">
          <div className="all_on_6_des_title" data-aos="fade-up">
            <h1>Our Solution</h1>
            <p></p>
          </div>

          <div className="on6_div1_main_cont" data-aos="zoom-out-up">
            <div className="on6_div1_main_cont_1">
              <img
                src={oursolution1}
                alt="doctor-prem-dental-careDental implants in chennai" />
            </div>
            <div className="on6_div1_main_cont_2">
              <p>
                {" "}
                Our Apollo Dental clinics in Chennai and Hyderabad, aim to
                provide the world's best dental care and treatment for patients
                across India and overseas. We are dedicated to successful
                patient outcomes and creating confident smiles by providing
                patients with chronic dental problems cutting edge permanent
                solutions. Our expert dental professionals provide personalised
                individually tailored treatments in implantology, general
                dentistry, and cosmetology and have more than 50+ years of
                combined experience in transforming patient smiles.
              </p>
              <p>
                Our specialised implant treatments include All-on-4 and All-on-6
                dental implants, various dental fillings, sinus lifts,
                Invisalign treatments, periodontal care, and all types of
                cosmetic dental procedures. Our goal is to provide our patients
                with the highest standards of quality at affordable cost with a
                long term purview.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSolution;
