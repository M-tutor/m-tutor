import React, { useState , useEffect, useContext} from "react";
import logo1 from "../../assets/Copy of Mora Maths- Vertical logo - White text.png";
import logo2 from "../../assets/M-tutor - White logo.png";
import googleLogo from "../../assets/Google__G__Logo.svg.png";
import CustomTextField from "../../components/textfield";
import CustomButton from "../../components/button";
import CustomDatePicker from "../../components/datepicker";
import DistrictSelect from "../../components/select_district";
import YearSelect from "../../components/select_year";
import Alert from '@mui/material/Alert';
import {auth, googleProvider} from '../../config/firebase'
import { createUserDocument } from "../../services/userService";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from "react-router";

import AuthProvider, { AuthContext } from "../../contextStore/AuthProvider";

function MainComponents() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [dob, setDob] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [year, setYear] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const {loggedUser, setLoggedUser} = useContext(AuthContext);

  async function signUp(){
    try{
      if (password1 !== password2){
        setError('Passwords do not match');
        return;
      }
        const {user} = await createUserWithEmailAndPassword(auth, email, password1);
        await createUserDocument(user, {name, school, address, district, dob, contactnum, year});
        setLoggedUser(user);
        navigate('/dashboard');
    } catch(error){
        console.log(error);
    }  
  }

  async function signUpWithGoogle(){
    try{
        let {user} = await signInWithPopup(auth, googleProvider);

        await createUserDocument(user, {name:user?.displayName, school, address, district, dob, contactnum, year});
        setLoggedUser(user);
        navigate('/dashboard');
    } catch(error){
        console.log(error);
    } 
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        
        setUser(user);
        
      } else {
        // No user is signed in
        
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="maincontainer">
      <img src={logo1} alt={"maths-tutor logo"} width={"100vh"} />

      <div className="subdive1">
        <h2>Create an account</h2>
        <h6>Let's get started</h6>
      </div>

      <div className="inputsection">
        <CustomTextField className="a" name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <CustomTextField className="b" name="school" label="School" value={school} onChange={(e) => setSchool(e.target.value)} />
        <CustomTextField className="c" name="address" label="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        <DistrictSelect
          value={district}
          onChange={(newValue) => setDistrict(newValue)}
        />
        {/* <CustomTextField id="e" name="dob" label="Date of birth" value={dob} onChange={(e) => setDob(e.target.value)}/> */}
        <CustomDatePicker
          className="e"
          // label="Date of birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <CustomTextField
          className="f"
          name="contactnum"
          label="Whatsapp number" 
          value={contactnum}
          onChange={(e) => setContactnum(e.target.value)}         
          // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        />
        <YearSelect
          value={year}
          onChange={(newValue) => setYear(newValue)}
        />
        <CustomTextField
          className="h"
          name="password1"
          label="Password"
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <CustomTextField
          className="i"
          name="password2"
          label="Confirm Password"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <CustomTextField className="j" name="email" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <CustomButton className="k" onClick={signUp}>
          <h4 className="buttontexts">Sign up</h4>
        </CustomButton>
        <CustomButton className="l" color="secondary" onClick={signUpWithGoogle}>
          <div className="googlebutton">
            <img src={googleLogo} alt={"google logo"} width={"8%"} />
            <h4 className="buttontexts">Continue with google</h4>
          </div>
        </CustomButton>
      </div>

      <div className="bottomcontainer">
        <h5>Already have an account?</h5>
        <a href={user ? "/dashboard" : "/login"}>
          <h5 id="logintext">
            <b>Login</b>
          </h5>
        </a>
      </div>

      <img src={logo2} alt={"maths-tutor logo"} width={"45vh"} />
    </div>
  );
}

export default MainComponents;
