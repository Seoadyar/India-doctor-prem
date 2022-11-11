import '../css/footer.css'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

function Footer() {
    return (
        <div>
            <div className="footer_cont">
                <div className="footer_main_cont">

                    <div className="add_main_cont">
                        <div className="add_1" data-aos="zoom-in">
                            <p className="host_name">Apollo Dental Navalur</p>
                            <p>
                                House of Hiranandani
                                Unit #2 & 3, Gateway House,
                                5/63, OMR,
                                Egattur Village, Thalambur Post,
                                Chennai-600130</p>
                            <p><BsTelephoneFill className='f_icons f_ph_icon' />98844 54007/98844 53007</p>
                            <a href=" https://instagram.com/apollodental_navalur?igshid=YmMyMTA2M2Y"><FiInstagram className='f_icons' />Instagram</a><br></br>
                            <a className="foo_anch_link2" href="https://www.facebook.com/apollodentalnavalur"><FaFacebookSquare className='f_icons' />  Facebook</a>
                        </div>
                        <div className="add_1" data-aos="zoom-in">
                            <p className="host_name">Apollo Dental Thoraipakkam</p>
                            <p>Vinayagam Avenue,
                                Okkiyam, Thoraipakkam,
                                OMR,
                                Chennai - 600097
                            </p>
                            <p><BsTelephoneFill className='f_icons f_ph_icon' />91767 67688/89399 88833</p>
                            <a href="https://instagram.com/apollodentalthoraipakkam?igshid=YmMyMTA2N" ><FiInstagram className='f_icons' />Instagram</a><br></br>
                            <a className="foo_anch_link2" href="https://www.facebook.com/apollodentalthoraipakkam" ><FaFacebookSquare className='f_icons' />Facebook</a>
                        </div>


                        <div className="add_1" data-aos="zoom-in">
                            <p className="host_name">Apollo Dental Gachibowli</p>
                            <p>3rd Floor, Plot #20 Telecom Nagar,
                                Opp. South India Shopping Mall
                                Gachibowli,
                                Hyderabad - 500032
                                Telangana
                            </p>

                        </div>
                    </div>
                    <div className='copy_right_cont'>

                        <p>Keep upto date with us, Subscribe to our newsletter here.</p>
                        <p>All rights reserved to Premolar Healthcare LLC</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;