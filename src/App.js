
import React from "react";
import "./App.css";
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import logo from "./logo.svg";
import Navbar from "./components/navbar/navbar";
import Quiz from "./screens/Quiz/quiz";
import QuizPage from "./screens/QuizPage/quizpage";
import LoggingScreen from "./screens/LoggingScreen";
import SignUp from "./screens/sign_up_screen/signup_screen";
// import Quiz from "./screens/QuizPage/quizpage";
//import Home from "./screens/home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        {window.location.href === '/login' && <Navbar />}
        <Routes>
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/quiz/Algebra/Geometry" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoggingScreen />} />
          {/* <Route path="/" element={<LoggingScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
