import React, { useState } from 'react';
import './enquire.css';
import { FiMail } from 'react-icons/fi'
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

function Enquire() {
    const [open, setOpened] = useState(false);

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [country, setCountry] = useState('');
    const [phno, setPhno] = useState("")
    const [quries, setQuries] = useState("")
    const handleClicked = () => {
        setOpened(!open)
    }

    const ButtonClicked = (e) => {
        e.preventDefault();
        const data = {
            Name: name,
            WhatsappNumber: phno,
            MailId: mail,
            Country: country,
            Quries: quries
        }
        console.log(data)
        axios.post('https://sheet.best/api/sheets/a8617e93-8feb-4882-bd14-1df238470a19', data).then((res) => {
            setName('');
            setPhno('');
            setMail('');
            setQuries('');
            setCountry('');
        })
        setOpened(false)
    }

    return (
        <div>
            <div className='EnquireMainContainerOne'>
                <div className='EnquireMainContainer'>
                    <div className='enquireContainer' onClick={handleClicked}>
                        <div className='textContainer'>
                            <p><FiMail className='mailIcon' /></p>
                            <p>Contact</p>
                            <p>Us</p>
                        </div>
                    </div>

                    <div className={open ? 'enquireFormContainer' : 'falseEnquireFormContainer'}>
                        <form>
                            <input type='text' name='name' placeholder='Name' id='inputItem' onChange={(e) => { setName(e.target.value) }} />
                            <input type='number' placeholder='Whatsapp number' id='inputItem' onChange={(e) => { setPhno(e.target.value) }} />
                            <input type='email' placeholder='Email Id' id='inputItem' onChange={(e) => { setMail(e.target.value) }} />
                            <Select
                                className='dropdownContainer'
                                value={country}
                                onChange={(e) => { setCountry(e.target.value) }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}

                            >
                                <MenuItem value="">
                                    <p className='MenuLabelText'>Select your country</p>
                                </MenuItem>
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="Australia">Australia</MenuItem>
                                <MenuItem value="Africa">Africa</MenuItem>
                                <MenuItem value="America">America</MenuItem>
                                <MenuItem value="Malaysia">Malaysia</MenuItem>
                            </Select>
                            <textarea id='textAreaItem' placeholder='Write your query here ...' onChange={(e) => { setQuries(e.target.value) }} />
                            <Button variant='contained' id='formButton' onClick={ButtonClicked}>Send</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Enquire