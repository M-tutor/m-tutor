
import React, { useContext } from "react";
import "./App.css";
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
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
import { auth } from "./config/firebase";
import { useEffect , useState , useNavigate , useLocation} from "react";
import About from "./screens/About/About";
import HomePage from "./screens/homepage";
import { AuthContext } from "./contextStore/AuthProvider";

function App() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        {/* {JSON.stringify(currentUser)}
        {window.location.pathname}
        {currentUser && window.location.pathname !== '/' && window.location.pathname !== '/login' && window.location.pathname !== '/signup' && window.location.pathname !== '/about' && <Navbar />}
        {!currentUser && (window.location.pathname === '/dashboard' || window.location.pathname === '/quizpage') && <Navbar />} */}
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route
            path="/quizpage"
            element={<QuizPage />}
          />
          <Route
            path="/quiz/Algebra/Geometry"
            element={currentUser ? <Quiz /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            // element={user ? <Dashboard /> : <Navigate to="/login" />}
            element = {<Dashboard />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            // element={user ? <Navigate to="/dashboard" /> : <LoggingScreen />}
            element = {<LoggingScreen />}
          />
          {/* Redirect to login if user is not signed in */}
          {/* <Route
            path="/*"
            element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;