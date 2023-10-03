import React from "react";
import logo1 from "../../assets/Copy of Mora Maths- Vertical logo - White text.png";
import logo2 from "../../assets/M-tutor - White logo.png";
import googleLogo from "../../assets/Google__G__Logo.svg.png";
import CustomTextField from "../../components/textfield";
import CustomButton from "../../components/button";
import BasicDatePicker from "../../components/datepicker";
import DistrictSelect from "../../components/select_district";
import YearSelect from "../../components/select_year";

function MainComponents() {
  // const [userInputs, setInputs] = React.useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  // function updateVar(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((prevVal) => ({ ...prevVal, [name]: value }));
  // }

  // function handleSubmit() {
  //   console.log(userInputs);
  // }

  return (
    <div className="maincontainer">
      <img src={logo1} alt={"maths-tutor logo"} width={"100vh"} />

      <div className="subdive1">
        <h2>Create an account</h2>
        <h6>Let's get started</h6>
      </div>

      <div className="inputsection">
        <CustomTextField className="a" name="name" label="Name" />
        <CustomTextField className="b" name="school" label="School" />
        <CustomTextField className="c" name="address" label="Address" />
        <DistrictSelect
          className="d"
          name="district of the school belongs"
          label="District of the school belongs"
        />
        <CustomTextField id="e" name="dob" label="Date of birth" />
        <CustomTextField
          className="f"
          name="contactnum"
          label="Whatsap number"
        />
        <YearSelect
          className="g"
          name="year"
          label="Year (that going to face O/L)"
        />
        <CustomTextField
          className="h"
          name="password1"
          label="Password"
          type="password"
        />
        <CustomTextField
          className="i"
          name="password2"
          label="Confirm Password"
          type="password"
        />
        <CustomTextField className="j" name="email" label="Email Address" />

        <CustomButton className="k">
          <h4 className="buttontexts">Sign up</h4>
        </CustomButton>
        <CustomButton className="l" color="secondary">
          <div className="googlebutton">
            <img src={googleLogo} alt={"google logo"} width={"8%"} />
            <h4 className="buttontexts">Continue with google</h4>
          </div>
        </CustomButton>
      </div>

      <div className="bottomcontainer">
        <h5>Already have an account?</h5>
        <a href="https://www.hipnoterapie.org/underconstruction.png">
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
