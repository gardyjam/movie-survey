import React from "react";

const StepOne = ({nextStep, handleStepChange}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div>
            bla bla bla introduction

            <button onClick={ Continue }>Next</button>
        </div>
    );
}

export default StepOne