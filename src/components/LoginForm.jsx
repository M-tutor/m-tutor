import React from "react";
import { useFormik } from "formik";
import CustomButton from "./CustomButton";
import GoogleIcon from "../assets/Icons/GoogleIcon";

export const LoginForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center">
        <label htmlFor="email" className="text-light">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="bg-dark border-2 border-solid border-light rounded-md h-8 text-light w-3/5"
        />
        <label htmlFor="password" className="text-light">
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="bg-dark border-2 border-solid border-light rounded-md h-8 text-light w-3/5"
        />

        <CustomButton className="mt-12 hover:bg-btnH">Log in</CustomButton>
        <CustomButton className="bg-light p-2 mt-4 hover:bg-lightH">
          <div className="flex items-center">
            <GoogleIcon />
            <p>continue with google</p>
          </div>
        </CustomButton>
      </div>
    </form>
  );
};
