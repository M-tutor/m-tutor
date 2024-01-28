import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../config/firebase";

const getQuizzes = async () => {
  let qs = [];

  await getDocs(collection(firestore, "Quiz"))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        qs.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((error) => {
      console.error("Error fetching documents:", error);
    });
    console.log(qs);
  return qs;
};

const getQuizByID = async (quizID) => {
  let data = {}
  await getDoc(doc(firestore, "Quiz", quizID))
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