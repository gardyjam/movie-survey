import {useState} from "react";
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import Confirmation from './steps/Confirmation';
import TheEnd from './steps/TheEnd';
// import {db} from './firebaseConfig';
import {ref, set} from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
//import { collection, addDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, addDoc } from 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

const fa = initializeApp(firebaseConfig);
const db = fa.firestore();

function MovieSurvey () {

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const prevStep = () => {
    setStep(step-1);
  }

  const nextStep = () => {
    setStep(step+1);
  }

  const handleResponseChange = (questionId, value) => {
      setAnswers(prevAnswers => ({
          ...prevAnswers,
          [questionId]: value,
      }));
  };
  
  const handleSubmit = async () => { 
    const answersCollection = collection(db, 'responses');

    try {
      await addDoc(answersCollection, { answers });
      console.log('Dane zapisane w bazie danych Firestore');
    } catch (error) {
      console.error('Błąd podczas zapisu danych:', error);
    }
      // var answersRef = db.database().ref("responses/");

      // answersRef.set ({
      //   response1: {
      //     answers:answers
      //   },
      // })
  };  

        switch (step) {
            case 1: 
              return (
                // w przyszlosci komponent "introduction - opis projektu itp" 
                <StepOne 
                    nextStep={nextStep}
                />
              )
            case 2: 
              return (
                <StepTwo 
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleResponseChange={handleResponseChange}
                />
              )
            case 3: 
              return (
                <StepThree
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleResponseChange={handleResponseChange}

                />
              )
            case 4: 
              return (
                <Confirmation 
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleResponseChange={handleResponseChange}
                    handleSubmit={handleSubmit}
                />
              )
            case 5:
              return (
                <TheEnd 
                />
              )
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
        }
        // return (
        //     <div>
        //         {/* w przyszlosci komponent "introduction - opis projektu itp" */}
        //         <OpenQuestion question={"Jak masz na imie?"}></OpenQuestion>
        //         <LikertScaleQuestion question={"Czy Zoolander to najlepszy film świata?"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 1"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 2"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 3"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 4"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 5"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 6"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 7"}></LikertScaleQuestion>
        //         <LikertScaleQuestion question={"Pytanie 8"}></LikertScaleQuestion>
        //     </div>
        // );
    
}

export default MovieSurvey;
