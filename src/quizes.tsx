import React, { useEffect, useState } from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
  author: string;
  created_on: string;
}

const Quizes: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch('https://cae-bookstore.herokuapp.com/question/all')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <p>answer: {question.answer}</p>
          <p>Author: {question.author}</p>
          <p>Created On: {question.created_on}</p>
        </div>
      ))}
    </div>
  );
};

export default Quizes;
