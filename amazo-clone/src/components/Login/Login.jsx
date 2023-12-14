import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import {auth} from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            if(userCredential){
                navigate('/');
            }
        })
        .catch((error) => alert( error.message));  
    };
        const register = (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // create account with email and password
            if(userCredential){
                navigate('/');
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };

  return (
    <div className='login'>
        <Link to="/">
            <img 
            className='login__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
        </Link>
        <div className='login__container'>

            <h1>Sign-in</h1>

            <form>

                <h5>Email</h5>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon Conditions of Use and Privacy Notice. </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>    
    </div>
  );
}
export default Login;

