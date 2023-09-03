'use client';
import React, { useState } from 'react';
import { useAuth } from "@/contexts/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faLock, faEnvelope, faUser, faImage, faEye } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheckRegular } from '@fortawesome/free-regular-svg-icons';


const Signup = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    profile_picture: null,
    bio: '',
    email: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const { token } = useAuth()

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log("value:",value)
    console.log()
    if (name === 'password') {
      setPasswordMatch(
        state.confirm_password === value
      );
    }
    
    if(name === 'confirm_password'){
      setPasswordMatch(
        state.password === value
      );
    }
  };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(state);
//   };

    console.log("token: " + token)

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // Check if passwords match before submitting the form
      if (!passwordMatch) {
        console.error('Passwords do not match');
        return;
      }

      const response = await fetch('https://new-backend-alpha.vercel.app/api/v1/accounts/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        // Request successful
        const data = await response.json();
        console.log('Response data:', data);

        // Redirect to the login page
        // window.location.href = '/login'; // Replace '/login' with the actual login page URL
      } else {
        // Request failed
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

    console.log("passwordMatch:",passwordMatch)
    console.log("type:",typeof(passwordMatch))

    const handleProfilePictureChange = event => {
      const file = event.target.files[0]; 
      setState({ ...state, profile_picture: file });
    };

  return (
    <div className="mainContainer"> 
      <div className="signup-form">
        <div className="container">
          <div className="signUp-header">
            <h1>Create an Account</h1>
            <p className="signUp-p">Get started for free!</p>
          </div>
          <form onSubmit={handleSubmit}> 
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faUser} /></i>
              <input name="username" type="text" placeholder="Username" onChange={handleChange} required/>
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faEnvelope} /></i>
              <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faImage} /></i>
              <input
                type="file"
                accept="image/*"
                name="profile_picture"
                onChange={handleProfilePictureChange}
              />
            </div>
            <div className="signUp-input signUp-input-custom">
              <i className="fa-solid"><FontAwesomeIcon icon={faUser} /></i>
              <textarea
                name="bio"
                placeholder="Bio"
                onChange={handleChange}
                rows={4}
              />
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faLock} /></i>
              <input name="password" 
                      type="password" 
                      placeholder="Password" 
                      onChange={handleChange} 
                      className={passwordMatch ? "password-match" : "password-mismatch" }
                      /*onInput={check}*/
                      required/>
              </div>
              <div className='ValidationContainer'>
              <div id="set" >
                <div id="count">Length : 0</div>
                  <i id="see" /*onClick={see}*/ ><FontAwesomeIcon icon={faEye} /></i> 
                  </div>
                    <div id="check0">
                          <i><FontAwesomeIcon icon={faSquareCheckRegular} /></i>  <span> Length more than 5.</span>
                    </div>
                    <div id="check1">
                          <i><FontAwesomeIcon icon="fa-regular fa-square-check" /></i>  <span> Length less than 10.</span>
                    </div>
                    <div id="check2">
                          <i><FontAwesomeIcon icon="fa-regular fa-square-check" /></i>  <span> Contains numerical character.</span>
                    </div>
                    <div id="check3">
                          <i><FontAwesomeIcon icon="fa-regular fa-square-check" /></i>   <span>Contains special character.</span>
                    </div>
                    <div id="check4">
                          <i><FontAwesomeIcon icon="fa-regular fa-square-check" /></i>  <span>Shouldn't contain spaces.</span>
                    </div>
            </div>
            <br/>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faKey} /></i>
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                className={passwordMatch ? "password-match" : "password-mismatch" }
                required
                />
            </div>
            <div className={passwordMatch ? "hidden" : "visible" }>
              password does not match
            </div>
            <input className="signup-btn" type="submit" value="SIGN UP" disabled={!passwordMatch}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;