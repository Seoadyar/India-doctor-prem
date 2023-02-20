import React from 'react'
import '../css/thankyou.css'
import verify from '../Assests/verify.gif'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function ThankYou() {
    const navigate = useNavigate();
    return (
        <div className='thankyouHolder'>
            <div className='thankyouHolderContainer'>
                <img src={verify}/>
                <p className='txtOne'>Thanks for submitting!</p>
                <p className='txtTwo'>Your message has been sent !</p>
                <Button variant='contained' onClick={()=>navigate("/")}>Go Home</Button>
            </div>
        </div>
    )
}

export default ThankYou