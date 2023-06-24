import React, { useState } from 'react';
import Quizes from './quizes';
import RegisterForm from './register';

const ShowQuiz: React.FC = () => {
    const [showQuiz, setShowQuiz] = useState(true);

    const handleQuizClick = () => {
        setShowQuiz(!showQuiz);
    };

    return (
        <div>
            <h3>You must register to view the quizes</h3>
            <button onClick={handleQuizClick}>Register</button>
            {showQuiz ? <RegisterForm /> : <Quizes />}
        </div>
    );
};

export default ShowQuiz;