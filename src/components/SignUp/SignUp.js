import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import fireBaseAuth from '../../firebase.init';
import googleIcon from '../../images/imgs/google.svg';
import './SignUp.css';

const SignUp = () => {
    const [showError, setError] = useState('');
    const [showSuccess, setSuccess] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     
    const auth = fireBaseAuth;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
   

    return (
        <div className="auth_from_container">
            <form className='auth_from'>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="np">Password</label>
                    <input id='np' type="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cp">Confirm Password</label>
                    <input id='cp' type="password" required />
                </div>
                <div className="form-group">
                    <input type="submit" className='al_btn btn-orenge-light' value="Sign Up" />
                    <p className='switch_text'>Already have an account?<Link to="/login"> Login</Link></p>
                </div>
            </form>
            <div className="al_block_divider">
                <span></span>
                <p>or</p>
                <span></span>
            </div>
            <div className="al-social-buttons">
                <button onClick={() => signInWithGoogle()} className='al_btn al-google-btn'> <img src={googleIcon}  /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;