import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import QuizSubject from "../../components/quizsubject/quizsubject";
import "./quizpage.css";
import quizService from "../../services/quizService";
import LoadingIcon from "../../components/loading/LoadingIcon"

function QuizPage() {
  const navigate = useNavigate();
  const [tabData, setTabData] = useState([]); 
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTabData = async () => {
      setIsLoading(true);
      const data = await quizService.getQuizzes();
      setTabData(data);
      setIsLoading(false);
    };
    getTabData();
  }, []);


  const handleTopic = (item, tabTitle, id) => {
    console.log(id);
    navigate(`/quiz/${tabTitle}/${item}?id=${id}`);
  };
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      {isloading && <LoadingIcon/> }
      <div className="container">

        <div className="h1">Quizzes</div>

        {tabData.map((tab, index) => (
          <QuizSubject
            tabIndex={index}
            tabTitle={tab.title}
            dropdownItems={tab.dropdownItems}
            handleTopic={handleTopic}
          />

        ))}
      </div>
    </>
  );
}

export default QuizPage;