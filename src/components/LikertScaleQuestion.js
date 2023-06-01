import React, {useState} from 'react';
import Likert from 'react-likert-scale';

const LikertScaleQuestion = ({ question, responses = [] }) => {
  const defaultResponses = [
    { value: 1, text: 'Zdecydowanie się zgadzam' },
    { value: 2, text: 'Zgadzam się' },
    { value: 3, text: 'Trudno powiedzieć', checked: true },
    { value: 4, text: 'Nie zgadzam się' },
    { value: 5, text: 'Zdecydowanie się nie zgadzam' }
  ]

  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionChange = value => {
    setSelectedValue(value);
    console.log(value);
  };

  const likertOptions = {
    question: question,
    responses: responses.length > 0 ? responses : defaultResponses.map((response, index) => ({
      value: response.value,
      text: response.text,
      checked: response.checked || false,
      element: <span>{response.text}</span> // Wyświetlanie tekstu pod kropkami
    })),
    onChange: val => {
      console.log(val);
    }
  };
  
  return <Likert {...likertOptions} />;
};

export default LikertScaleQuestion;
