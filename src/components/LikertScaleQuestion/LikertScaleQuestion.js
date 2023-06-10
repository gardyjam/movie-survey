import Likert from 'react-likert-scale';
import './LikertScaleQuestion.css';
import { useState } from 'react';

function LikertScaleQuestion ({ question, responses = [], questionId, onChange }) {
  const defaultResponses = [
    { value: 5, text: 'Zdecydowanie się zgadzam' },
    { value: 4, text: 'Zgadzam się' },
    { value: 3, text: 'Trudno powiedzieć', checked: true },
    { value: 2, text: 'Nie zgadzam się' },
    { value: 1, text: 'Zdecydowanie się nie zgadzam' }
  ]

  const [selectedValue, setSelectedValue] = useState(null);

  // const handleResponseChange = (value) => {
  //   setSelectedValue(value);
  //   console.log(value);
  // };

  const likertOptions = {
    question: question,
    questionId: questionId,
    responses: responses.length > 0 ? responses : defaultResponses.map((response, index) => ({
      value: response.value,
      text: response.text,
      checked: response.checked || false,
      element: <span>{response.text}</span> // Wyświetlanie tekstu pod kropkami
    })),
    onChange: val => {
      onChange(questionId, val);
      console.log(val);
    }
  };
  
  return <Likert
           {...likertOptions} 
           onChange={onChange}
           className="likert" 
           />;
};

export default LikertScaleQuestion;
