// Container.js
import React from 'react';
import "./Login.css";
import { AiTwotonePhone } from "react-icons/ai"
import { BsFillPhoneFill } from "react-icons/bs"
import img1 from "./inf.jpg"

const Login = () => {
    return (
        <div className="container">
            <div className="left-part">
                <div className='Images'>
                    <img src={img1} alt="" width="400px" height="500px" />
                </div>
            </div>
            <div className="right-part">
                <div className='inputs'>
                    <h1 className='hello'> Login</h1>
                    <div className='inputbox'>
                        <button className='inputbutton'><AiTwotonePhone /></button>
                        <input type="text" required="required" name='Phone' />
                        <span>PHONE NUMBER</span>

                    </div>
                    <div className='inputbox'>
                        <button className='inputbutton'><BsFillPhoneFill /></button>
                        <input type="text" required="required" name='otp' />
                        <span>OTP</span>
                    </div>
                    <button id="button" type='Submit'>login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
