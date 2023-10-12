import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./screens/Quiz/quiz";
import QuizPage from "./screens/QuizPage/quizpage";
import LoggingScreen from "./screens/LoggingScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/:topic/:subTopic" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<LoggingScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
