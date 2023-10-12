import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const getQuizzes = async () => {
  let qs = [];

  await getDocs(collection(db, "Quiz"))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        qs.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((error) => {
      console.error("Error fetching documents:", error);
    });

  return qs;
};

const getQuizByID = async (quizID) => {
  let data = {}
  await getDoc(doc(db, "Quiz", quizID))
    .then((doc) => {
      data = doc.data();

    })
    .catch((error) => {
      console.error("Error fetching documents:", error);
    });

    return data;
  
};

export default {
  getQuizzes,
  getQuizByID,
};
