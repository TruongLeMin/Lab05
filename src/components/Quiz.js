import React from 'react';
import Question from './components/Question';

const questions = [
    // your questions array here
];

function Quiz() {
    return (
      <div className="container mt-3">
        <h1>Quiz Page</h1>
        {questions.map(question => (
          <Question key={question.id} data={question} />
        ))}
      </div>
    );
  }
  
  export default Quiz;