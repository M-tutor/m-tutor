import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./quiz.css";
import { quiz } from "../../data/quiz_data";
import logo from "../../assets/M-tutor-white.png";
import quizImg from "../../assets/3827186316baeba98a06052b1fd4711a.png";

const Quiz = () => {
    
//==========================================Amila==================================================//
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
    
    
    const { questions } = quiz;
    
    console.log(questions);
    const { question, choices, correctAnswer } = questions[activeQuestion]
  
    const onClickNext = () => {
    //   setSelectedAnswerIndex(null)
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1) {
        console.log("Arrived at set active if");
        setActiveQuestion((prev) => prev + 1)
      } else {
        console.log("Arrived at set active else");
        setActiveQuestion(0)
        setShowResult(true)
      }
    }
  
    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index)
      
      if (answer === correctAnswer) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }

    const handlePreviousQuestion = () => {
        if (activeQuestion > 0) {
          setActiveQuestion(activeQuestion - 1);
        }
      };

    const checkArraySize = (array,length) => {

        return array.length >= length ;//&& typeof arr[3] !== 'undefined';
    }
  
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  


// =================================Rasula=========================================================//
  const { subTopic, topic } = useParams();
  
//   const questions = [
//     {
//       question:
//         "In the given figure, ABCD is a cyclic quadrilateral whose side AB is a diameter of the circle through A, B, and C. If ADC=130, find CAB.?",
//       answers: [
//         { type: "text", content: "40°" },
//         {
//           type: "image",
//           content:
//             "https://th.bing.com/th/id/R.b6f130e8af70a879efdea41d62451d3c?rik=lrv3Zz4RuXiGiA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-OHYn2oaFjFs%2fT69JT2qdOBI%2fAAAAAAAACwI%2fmnL9cWnCRcE%2fs1600%2fGoogle%2bWallpapers%2bFree.jpg&ehk=LSgQ69ryfMtL%2fah%2fPqrx5BjEM%2f9bNJed7MfYrhs6GF4%3d&risl=&pid=ImgRaw&r=0",
//         },
//         { type: "text", content: "30°" },
//         { type: "text", content: "130°" },
//       ],
//     },
//     {
//       question: "Which planet is known as the Red Planet?",
//       answers: [
//         { type: "text", content: "Mars" },
//         { type: "text", content: "Earth" }, // Example image URL
//         { type: "text", content: "Jupiter" },
//         { type: "text", content: "Venus" },
//       ],
//     },
//   ];
  
  

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

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

  const handleAnswerSelection = (answer, index) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div>
        {!showResult ? (
            <div className="quiz-container">
            <div className="left-container">
              <div className="upper-tab">
                <img src={logo} />
                <h3>{`${topic} > ${subTopic} > ${activeQuestion + 1}`}</h3>
              </div>
              <h2>Question {activeQuestion + 1}</h2>
              <div className="question-container">
                <p>{question}</p>
                <img src={quizImg} />
              </div>
            </div>
            <div className="right-container">
              <h2>Answers</h2>
              <form>
                {choices.map((answer, index) => (
                  <label key={index} className="answer-label">
                    <input
                      type="radio"
                      name="answerGroup"
                      value={answer.content}
                      checked={
                        selectedAnswers[activeQuestion] === answer.content
                      }
                      onChange={() =>{
                        onAnswerSelected(answer.content, activeQuestion);
                        handleAnswerSelection(answer.content, activeQuestion);
                      }
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
                  disabled={activeQuestion === 0}
                >
                  Previous
                </button>
                
                <button onClick={onClickNext}>
                      {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'} 
              </button>
              </div>
            </div>
            </div>
        ):(
            <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
          </div>
        )}
       
    </div>
  );
};

export default Quiz;


//disabled={selectedAnswerIndex === null}