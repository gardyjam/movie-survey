import { useRef } from 'react';
import uuid from 'uuid';

const OpenQuestion = ({question}) => {
  const [interAnswer, setInterAnswer] = useState('');
  const [answers, setAnswers] = useState({
    a1: '',
    a2: '',
    a3: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ansRef = useRef(null);

  const interAnswerSubmit = (event) => {
    event.preventDefault();
    const ans = ansRef.current.value;
    setInterAnswer(name);
    console.log({ interAnswer, answers, isSubmitted });
  };

  let name = null;
  let questions = null;

  if (interAnswer === '' && !isSubmitted) {
    name = (
      <div>
        <h4>{question}</h4>
        <form onSubmit={interAnswerSubmit}>
          <input className="form-open" type="text" placeholder="Your answer" ref={ansRef} />
        </form>
      </div>
    );
  }

  return (
    <div>
      {name}
      ================
      =======
      {questions}
    </div>
  );
};

export default OpenQuestion;
