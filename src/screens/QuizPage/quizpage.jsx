import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import QuizSubject from "../../components/quizsubject/quizsubject";
import "./quizpage.css";

function QuizPage() {
  const navigate = useNavigate();
  const tabData = [
    {
      title: "Geometry",
      dropdownItems: ["Algebra", "Trigonometry", "Circle", "Ellipse"],
    },
    {
      title: "Algebra",
      dropdownItems: [
        "Linear Equations",
        "Quadratic Equations",
        "Polynomials",
        "Inequalities",
      ],
    },
    {
      title: "Trigonometry",
      dropdownItems: [
        "Trigonometric Functions",
        "Trigonometric Identities",
        "Solving Triangles",
      ],
    },
    {
      title: "Calculus",
      dropdownItems: [
        "Limits and Continuity",
        "Derivatives",
        "Integrals",
        "Applications of Calculus",
      ],
    },
    {
      title: "Statistics",
      dropdownItems: [
        "Probability",
        "Descriptive Statistics",
        "Inferential Statistics",
        "Regression Analysis",
      ],
    },
    // Add more titles and dropdown items as needed
  ];

  const handleTopic = (item, tabTitle) => {
    console.log(item, tabTitle);
    navigate(`/quiz/${item}/${tabTitle}`);
  };
  return (
    <>
      {/* <div className="navbar">
        <Navbar />
      </div> */}

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
