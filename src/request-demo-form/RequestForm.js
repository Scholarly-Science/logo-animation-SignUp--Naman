import React, { useState } from 'react';
import './RequestForm.css';
import { Button } from '@material-ui/core';

function RequestForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState('');
    const [college, setCollege] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if(firstname === '' || lastname === '' || email === '' || title === '' || number === '' || college === '' || country === '') {
            setError(true);
        }
    }

    return (
        <div className='form'>
            <form>
                <div className='form__container'>
                    <div className='form__name'>
                        <div className='form__nameInput form__nameInputMargin '>
                            <label className='form__label'>First Name*</label>
                            <input className='form__input' type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className='form__nameInput'>
                            <label className='form__label'>Last Name*</label>
                            <input className='form__input' type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label className='form__label'>Work Email Address*</label>
                        <input className='form__input' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    
                    <div>
                        <label className='form__label'>Job Title*</label>
                        <input className='form__input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    
                    <div className='form__inputNumber'>
                        <label className='form__label'>Phone Number*</label>
                        <input className='form__input' type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    
                    <div>
                        <label className='form__label'>College/University Name*</label>
                        <input className='form__input' type='text' value={college} onChange={(e) => setCollege(e.target.value)} />
                    </div>

                    <div>   
                        <label className='form__label'>Country*</label>                    
                        <select className='form__select' value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Please Select</option>
                            <option value="A">Apple</option>
                            <option value="B">Banana</option>
                            <option value="C">Cranberry</option>
                        </select>
                    </div>

                    {error ? <p className='form__error'>Please Fill all the details</p> : null}

                    <Button variant="contained" className='form__button' fullWidth={true} type='submit' onClick={formSubmit}>
                        Request a demo
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default RequestForm
