import React from "react";
import "./App.css";
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./screens/Quiz/quiz";
import QuizPage from "./screens/QuizPage/quizpage";
import LoggingScreen from "./screens/LoggingScreen";
import SignUp from "./screens/sign_up_screen/signup_screen";
// import Quiz from "./screens/QuizPage/quizpage";
//import Home from "./screens/home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* {window.location.href === '/login' && <Navbar />} */}
        {user && <Navbar />}
        <Routes>
          {/* <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/quiz/Algebra/Geometry" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoggingScreen />} /> */}
          {/* <Route path="/" element={<LoggingScreen />} /> */}
          <Route
            path="/quizpage"
            element={user ? <QuizPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/quiz/Algebra/Geometry"
            element={user ? <Quiz /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <LoggingScreen />}
          />
          {/* Redirect to login if user is not signed in */}
          <Route
            path="/*"
            element={
              user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
