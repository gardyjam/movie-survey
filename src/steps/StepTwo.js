import React from "react";
import LikertScaleQuestion from "../components/LikertScaleQuestion";

const StepTwo = ({prevStep, nextStep, handleStepChange}) => {
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    return (
        <div>
            <LikertScaleQuestion question={"Pytanie 1"}></LikertScaleQuestion>
            <LikertScaleQuestion question={"Pytanie 2"}></LikertScaleQuestion>
            <LikertScaleQuestion question={"Pytanie 3"}></LikertScaleQuestion>
            <LikertScaleQuestion question={"Pytanie 4"}></LikertScaleQuestion>       

            <button onClick={ Previous }>Previous</button>
            <button onClick={ Continue }>Next</button>
        </div>
    );
}

export default StepTwo