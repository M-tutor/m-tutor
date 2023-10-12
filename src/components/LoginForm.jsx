import React, { useState } from "react";
import CustomButton from "./CustomButton";
import GoogleIcon from "../assets/Icons/GoogleIcon";
import {auth, googleProvider} from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={signIn}>
      <div className="flex flex-col items-center">
        <label htmlFor="email" className="text-light">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="bg-dark border-2 border-solid border-light rounded-md h-8 text-light w-3/5"
        />
        <label htmlFor="password" className="text-light">
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="bg-dark border-2 border-solid border-light rounded-md h-8 text-light w-3/5"
        />

        <CustomButton>Log in</CustomButton>
        <CustomButton className="bg-light p-2" onClick={signInWithGoogle}>
          <div className="flex items-center">
            <GoogleIcon />
            <p>continue with google</p>
          </div>
        </CustomButton>
      </div>
    </form>
  );
};
