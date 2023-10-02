import "./App.css";
import QuizPage from "./screens/QuizPage/quizpage";
import Quiz from "./screens/Quiz/quiz";
import Home from "./screens/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/quiz/:topic/:subTopic" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
