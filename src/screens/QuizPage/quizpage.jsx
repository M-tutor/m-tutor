import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/navbar/navbar";
import QuizSubject from "../../components/quizsubject/quizsubject";
import "./quizpage.css";
import quizService from "../../services/quizService";

function QuizPage() {
  const navigate = useNavigate();
  const [tabData, setTabData] = useState([]); 
  const [isloading, setIsLoading] = useState(false);
  // const tabData = [
  //   {
  //     title: "Geometry",
  //     dropdownItems: ["Algebra", "Trigonometry", "Circle", "Ellipse"],
  //   },
  //   {
  //     title: "Algebra",
  //     dropdownItems: [
  //       "Linear Equations",
  //       "Quadratic Equations",
  //       "Polynomials",
  //       "Inequalities",
  //     ],
  //   },
  //   {
  //     title: "Trigonometry",
  //     dropdownItems: [
  //       "Trigonometric Functions",
  //       "Trigonometric Identities",
  //       "Solving Triangles",
  //     ],
  //   },
  //   {
  //     title: "Calculus",
  //     dropdownItems: [
  //       "Limits and Continuity",
  //       "Derivatives",
  //       "Integrals",
  //       "Applications of Calculus",
  //     ],
  //   },
  //   {
  //     title: "Statistics",
  //     dropdownItems: [
  //       "Probability",
  //       "Descriptive Statistics",
  //       "Inferential Statistics",
  //       "Regression Analysis",
  //     ],
  //   },
  //   // Add more titles and dropdown items as needed
  // ];

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
    console.log(item, tabTitle);
    navigate(`/quiz/${tabTitle}/${item}?id=${id}`);
  };
  return (
    <>
      {/* <div className="navbar">
        <Navbar />
      </div> */}

      <div className="container">

        {isloading && <div className="loading">Loading...</div>}

        <div className="h1">Quizzes</div>
        {/* {JSON.stringify(tabData)} */}

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