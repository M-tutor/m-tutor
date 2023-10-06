import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./quiz.css";
// import logo from "../../assets/M-tutor-white.png";
// import quizImg from "../../assets/3827186316baeba98a06052b1fd4711a.png";

const Quiz = () => {
  const { subTopic, topic } = useParams();
  
  const questions = [
    {
      question:
        "In the given figure, ABCD is a cyclic quadrilateral whose side AB is a diameter of the circle through A, B, and C. If ADC=130, find CAB.?",
      answers: [
        { type: "text", content: "40°" },
        {
          type: "image",
          content:
            "https://th.bing.com/th/id/R.b6f130e8af70a879efdea41d62451d3c?rik=lrv3Zz4RuXiGiA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-OHYn2oaFjFs%2fT69JT2qdOBI%2fAAAAAAAACwI%2fmnL9cWnCRcE%2fs1600%2fGoogle%2bWallpapers%2bFree.jpg&ehk=LSgQ69ryfMtL%2fah%2fPqrx5BjEM%2f9bNJed7MfYrhs6GF4%3d&risl=&pid=ImgRaw&r=0",
        },
        { type: "text", content: "30°" },
        { type: "text", content: "130°" },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { type: "text", content: "Mars" },
        { type: "text", content: "Earth" }, // Example image URL
        { type: "text", content: "Jupiter" },
        { type: "text", content: "Venus" },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const initialSelectedAnswers = Array(questions.length).fill(null);
  const [selectedAnswers, setSelectedAnswers] = useState(
    initialSelectedAnswers
  );
  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz Finished!");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelection = (answer, index) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div className="quiz-container">
      <div className="left-container">
        <div className="upper-tab">
          {/* <img src={logo} /> */}
          <h3>{`${topic} > ${subTopic} > ${currentQuestionIndex + 1}`}</h3>
        </div>
        <h2>Question {currentQuestionIndex + 1}</h2>
        <div className="question-container">
          <p>{currentQuestion.question}</p>
          {/* <img src={quizImg} /> */}
        </div>
      </div>
      <div className="right-container">
        <h2>Answers</h2>
        <form>
          {currentQuestion.answers.map((answer, index) => (
            <label key={index} className="answer-label">
              <input
                type="radio"
                value={answer.content}
                checked={
                  selectedAnswers[currentQuestionIndex] === answer.content
                }
                onChange={() =>
                  handleAnswerSelection(answer.content, currentQuestionIndex)
                }
                className="answer-radio"
              />
              {answer.type === "text" ? (
                answer.content
              ) : (
                <img
                  className="answer-img"
                  src={answer.content}
                  alt={`Image ${index}`}
                />
              )}
            </label>
          ))}
        </form>
        <div className="buttons-container">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1
              ? "Finish Quiz"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;