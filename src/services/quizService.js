import quizAPI from "../api/quizAPI";

const getQuizzes = async () => {
  const response = await quizAPI.getQuizzes();
  let subTitles = {};
  let quizzes = [];
  for (let quiz of response) {
    if (quiz.title in subTitles) {
      subTitles[quiz.title].push({ subtitle: quiz.subtitle, id: quiz.id });
    } else {
      subTitles[quiz.title] = [{ subtitle: quiz.subtitle, id: quiz.id }];
    }
  }
  for (let title in subTitles) {
    quizzes.push({ title: title, dropdownItems: subTitles[title] });
  }
  return quizzes;
};

const getQuestionsforQuizID = async (quizID) => {

  const response = await quizAPI.getQuizByID(quizID);
  if (response) {
    return response.questions;
  }

  return [];
};

export default {
  getQuizzes,
  getQuestionsforQuizID,
};
