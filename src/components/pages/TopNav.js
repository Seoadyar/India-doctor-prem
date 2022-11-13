import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { HiPhone } from 'react-icons/hi'
import Navibar from "./Navibar";

import '../css/TopNav.css'
function TopNav() {
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
        </div>
    )
}

export default TopNav