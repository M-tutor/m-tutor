// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: [
            {content : 'stringify()',type : 'text'}, 
            {content : 'parse()',type : 'text'}, 
            {content : 'convert()',type : 'text'}, 
            {content : 'None of the above',type : 'text'}
        ],
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: [
            {content : 'var',type : 'text'}, 
            {content : 'let',type : 'text'},
            {content : 'var and let',type : 'text'},
            {content : 'None of the above',type : 'text'}
        ],
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: [
            {content : 'document.write()',type : 'text'}, 
            {content : 'console.log()',type : 'text'}, 
            {content : 'window.alert',type : 'text'}, 
            {content : 'All of the above',type : 'text'}
        ],
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: [
            {content : 'const',type : 'text'},
             {content : 'var',type : 'text'}, 
             {content : 'let',type : 'text'}, 
             {content : 'constant',type : 'text'}
            ],
        correctAnswer: 'const',
      },
    ],
  }