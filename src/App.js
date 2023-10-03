import "./App.css";
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./screens/Quiz/quiz_test";
import QuizPage from "./screens/QuizPage/quizpage";
import LoggingScreen from "./screens/LoggingScreen";
// import Quiz from "./screens/QuizPage/quizpage";
//import Home from "./screens/home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/quiz/Algebra/Geometry" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<LoggingScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
