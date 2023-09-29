import React from "react";
import logo1 from "../assets/Copy of Mora Maths- Vertical logo - White text.png";
import logo2 from "../assets/M-tutor - White logo.png";
import googleLogo from "../assets/Google__G__Logo.svg.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./Texts&Buttons.css"

function MainComponents() {

  const [userInputs, setInputs] = React.useState({
    name:'',
    email:'',
    password:''
  })

  function updateVar(event){
    const name = event.target.name
    const value = event.target.value
    setInputs((prevVal)=>({...prevVal, [name]:value }))
  }

  function handleSubmit(){
    console.log(userInputs)
  }

  return (
    <div className="maincontainer">
        <img src={logo1} alt={"maths-tutor logo"} width={"100vh"} />

      {/* topic */}
        <div className='subdives'>
            <h2>Create an account</h2>
            <h6>Let's get started</h6>
        </div>

      {/* text boxes */}

        <div className='subdives textboxes'>
        <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                size="small"
                onChange={updateVar}
                sx={{
                  '.css-zbc34q-MuiInputBase-root-MuiOutlinedInput-root':{borderRadius:'8px'},
                  '.css-9425fu-MuiOutlinedInput-notchedOutline':{borderWidth:'2px'}  , m:0
                }}
              />
              <TextField
                className="textfieldcss"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
                onChange={updateVar}
                sx={{
                  '.css-zbc34q-MuiInputBase-root-MuiOutlinedInput-root':{borderRadius:'8px'},
                  '.css-9425fu-MuiOutlinedInput-notchedOutline':{borderWidth:'2px'}, m:0
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                size="small"
                onChange={updateVar}
                autoComplete="current-password"
                sx={{
                  '.css-zbc34q-MuiInputBase-root-MuiOutlinedInput-root':{borderRadius:'8px'},
                  '.css-9425fu-MuiOutlinedInput-notchedOutline':{borderWidth:'2px'}  , m:0
                }}
              />
            </div>

      {/* buttons */}

      <div className="bottomsubdiv">
      <Button
        variant="contained"
        fullWidth
        my={2}
        onClick={handleSubmit}
        sx={{ textTransform: "none", height: "40px",  borderRadius: "8px" }}
      >
        <h4 className='buttontexts'>Sign up</h4>
      </Button>
        <Button
            variant="contained"
            fullWidth
            my={2}
            color='secondary'
            sx={{ textTransform: "none", height: "40px", borderRadius: "8px" }}
        >
            <div className="googlebutton">
            <img src={googleLogo} alt={"google logo"} width={"8%"} />
            <h4 className='buttontexts'>Continue with google</h4>
            </div>
        </Button>
      
        <div className='bottomcontainer'>
            <h5>Already have an account?</h5>
            <a href="#"><h5 id='logintext'><b>Login</b></h5></a>
        </div>
        </div>

      <img src={logo2} alt={"maths-tutor logo"} width={"45vh"} />
    </div>
  );
}

export default MainComponents;
