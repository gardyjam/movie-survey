import LikertScaleQuestion from "../components/LikertScaleQuestion/LikertScaleQuestion";
import handleResponseChange from "../MovieSurvey"
import './css/SurveySteps.css';
import { useState } from 'react';

function StepThree ({prevStep, nextStep, handleResponseChange}) {
   
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="survey-steps">
            <LikertScaleQuestion question={"Pytanie 5"} questionId="q5" onChange={value => handleResponseChange('q5', value)}/>
            <LikertScaleQuestion question={"Pytanie 6"} questionId="q6" onChange={value => handleResponseChange('q6', value)}/>
            <LikertScaleQuestion question={"Pytanie 7"} questionId="q7" onChange={value => handleResponseChange('q7', value)}/>
            <LikertScaleQuestion question={"Pytanie 8"} questionId="q8" onChange={value => handleResponseChange('q8', value)}/>       

            <button onClick={ Previous } className="previous-button">Poprzednie</button>
            <button onClick={ Continue } className="next-button">Następne</button>
        </div>
    );
}

export default StepThree