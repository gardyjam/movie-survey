import LikertScaleQuestion from "../components/LikertScaleQuestion/LikertScaleQuestion";
import handleResponseChange from "../MovieSurvey"
import './css/SurveySteps.css';
import { useState } from 'react';

const StepTwo = ({prevStep, nextStep, handleResponseChange}) => {
    
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
            <LikertScaleQuestion question={"Czy uważasz, że coś tam coś tam coś tam coś tam?"} questionId="q1" onChange={value => handleResponseChange('q1', value)}/>
            <LikertScaleQuestion question={"Pytanie 2"} questionId="q2" onChange={value => handleResponseChange('q2', value)}/>
            <LikertScaleQuestion question={"Pytanie 3"} questionId="q3" onChange={value => handleResponseChange('q3', value)}/>
            <LikertScaleQuestion question={"Pytanie 4"} questionId="q4" onChange={value => handleResponseChange('q4', value)}/>       

            <button onClick={ Previous } className="previous-button">Poprzednie</button>
            <button onClick={ Continue } className="next-button">Następne</button>
        </div>
    );
}

export default StepTwo