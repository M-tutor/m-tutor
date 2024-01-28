import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import "./quiz.css";
import { AuthContext } from "../../contextStore/AuthProvider";
import quizService from "../../services/quizService";
import Navbar from "../../components/navbar/navbar";

const Quiz = () => {
  const { subTopic, topic } = useParams();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  const [questions, setQuestions] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const [quizStatus, setQuizStatus] = useState({
    currentQuestionIndex: 0,
    selectedAnswers: Array(questions.length).fill(null),
    quizID: id,
  });

  const currentQuestion = questions[quizStatus.currentQuestionIndex];

  useEffect(() => {
    const quizStatusFromLocalStorage = localStorage.getItem(id);
    if (quizStatusFromLocalStorage) {
      setQuizStatus(JSON.parse(quizStatusFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    const getQuestions = async () => {
      setIsLoading(true);
      const data = await quizService.getQuestionsforQuizID(id);
      setQuestions(data);
      setIsLoading(false);
      console.log(data);
    };
    getQuestions();
  }, [id]);

  const submitquiz = () => {};

  const handleNextQuestion = () => {
    if (quizStatus.currentQuestionIndex < questions.length - 1) {
      updateQuizStatus({
        ...quizStatus,
        currentQuestionIndex: quizStatus.currentQuestionIndex + 1,
      });
    } else {
      submitquiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (quizStatus.currentQuestionIndex > 0) {
      updateQuizStatus({
        ...quizStatus,
        currentQuestionIndex: quizStatus.currentQuestionIndex - 1,
      });
    }
  };

  const handleAnswerSelection = (answer, index) => {
    const updatedSelectedAnswers = [...quizStatus.selectedAnswers];
    updatedSelectedAnswers[index] = answer;

    updateQuizStatus({
      ...quizStatus,
      selectedAnswers: updatedSelectedAnswers,
    });
  };

  const updateQuizStatus = (newQuizStatus) => {
    setQuizStatus(newQuizStatus);
    if (currentUser) {
      localStorage.setItem(id, JSON.stringify(newQuizStatus));
    }
  };

  const handleFinished = () => {
    const correctAnswers = questions.map(
      (question) => question.options[question.answer].content
    );
    const score = quizStatus.selectedAnswers.filter(
      (answer, index) => answer === correctAnswers[index]
    ).length;
    alert(`Your score is ${score} out of ${questions.length}`);
  };

  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <div className="left-container">
          {isloading && <h1>Loading...</h1>}
          <div className="upper-tab">
            {/* <img src={logo} /> */}
            <h3>{`${topic} > ${subTopic}> ${
              quizStatus.currentQuestionIndex + 1
            } of ${questions?.length}`}</h3>
          </div>
          <h2>Question {quizStatus.currentQuestionIndex + 1}</h2>
          <div className="question-container">
            <p>{currentQuestion?.question}</p>
            {/* <img src={quizImg} /> */}
          </div>
        </div>
        <div className="right-container">
          <h2>Answers</h2>
          <form>
            {currentQuestion?.options.map((answer, index) => (
              <label key={index} className="answer-label">
                <input
                  type="radio"
                  value={answer.content}
                  checked={
                    quizStatus.selectedAnswers[
                      quizStatus.currentQuestionIndex
                    ] === answer.content
                  }
                  onChange={() =>
                    handleAnswerSelection(
                      answer.content,
                      quizStatus.currentQuestionIndex
                    )
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
              disabled={quizStatus.currentQuestionIndex === 0}
            >
              Previous
            </button>

            {quizStatus.currentQuestionIndex === questions.length - 1 ? (
              <button onClick={handleFinished}>Finish Quiz</button>
            ) : (
              <button onClick={handleNextQuestion}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
