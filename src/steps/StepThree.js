import React from "react";
import LikertScaleQuestion from "../components/LikertScaleQuestion";

const StepThree = ({prevStep, nextStep, handleStepChange}) => {
   
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
            <LikertScaleQuestion question={"Pytanie 5"}></LikertScaleQuestion>
            <LikertScaleQuestion question={"Pytanie 6"}></LikertScaleQuestion>
            <LikertScaleQuestion question={"Pytanie 7"}></LikertScaleQuestion>
            <LikertScaleQuestion question={"Pytanie 8"}></LikertScaleQuestion>       

            <button onClick={ Previous }>Previous</button>
            <button onClick={ Continue }>Next</button>
        </div>
    );
}

export default StepThree