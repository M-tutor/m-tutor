import React ,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/navbar/navbar";
import QuizSubject from "../../components/quizsubject/quizsubject";
import "./quizpage.css";
import {firestore} from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../../components/navbar/navbar";

function QuizPage() {
  const navigate = useNavigate();
  const [tabData, setTabData] = useState([])
  

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const quizCollection = collection(firestore, "QUizDetails");
        const querySnapshot = await getDocs(quizCollection);

        const newTabData = querySnapshot.docs.map((doc) => ({
          title: doc.data().lesson,
          dropdownItems: doc.data().quizes,
        }));

        setTabData(newTabData);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  const handleTopic = (item, tabTitle) => {
    console.log(item, tabTitle);
    // navigate(`/quiz/${item}/${tabTitle}`);
    navigate('/quizpage');
  };
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

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