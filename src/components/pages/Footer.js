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
                            <p className="host_name">Navalur</p>
                            <p>
                                House of Hiranandani
                                Unit #2 & 3, Gateway House,
                                5/63, OMR,
                                Egattur Village, Thalambur Post,
                                Chennai-600130</p>
                                <div className='footer_socialm_cont'>
                                <p>Ph: 91767 67688/89399 88833</p>
                                <a href="https://instagram.com/apollodentalthoraipakkam?igshid=YmMyMTA2N" ><FiInstagram className='f_icons' />Instagram</a><br></br>
                                <a className="foo_anch_link2" href="https://www.facebook.com/apollodentalthoraipakkam" ><FaFacebookSquare className='f_icons' />Facebook</a>
                            </div>
                            <div className='footer_socialm_cont-dummy'>
                            </div>
                        </div>
                        <div className="add_1" data-aos="zoom-in">
                            
                            <p className="host_name">Thoraipakkam</p>
                            <p>Vinayagam Avenue,
                                Okkiyam, Thoraipakkam,
                                OMR,
                                Chennai - 600097
                            </p>
                            <div className='footer_socialm_cont'>
                                <p>Ph: 91767 67688/89399 88833</p>
                                <a href="https://instagram.com/apollodentalthoraipakkam?igshid=YmMyMTA2N" ><FiInstagram className='f_icons' />Instagram</a><br></br>
                                <a className="foo_anch_link2" href="https://www.facebook.com/apollodentalthoraipakkam" ><FaFacebookSquare className='f_icons' />Facebook</a>
                            </div>
                            <div className='footer_socialm_cont-dummy'>
                            </div>
                        </div>


                        <div className="add_1" data-aos="zoom-in">
                            <p className="host_name"> Gachibowli</p>
                            <p>3rd Floor, Plot #20 Telecom Nagar,
                                Opp. South India Shopping Mall
                                Gachibowli,
                                Hyderabad - 500032
                                Telangana
                            </p>
                            <div className='footer_socialm_cont'>
                                <p></p>
                               
                            </div>
                            <div className='footer_socialm_cont-dummy'>
                            </div>
                        </div>
                        d
                    </div>

                    
                    <div className='copy_right_cont'>

                        <p></p>
                        <p>All rights reserved to Premolar Healthcare LLP</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;