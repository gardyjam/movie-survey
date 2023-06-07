import React from "react";

const Confirmation = ({prevStep, nextStep}) => {
    
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
            Are you sure you want to finish?

            <button onClick={ Previous }>Previous</button>
            <button onClick={ Continue }>Finish</button>
        </div>
    );
}

export default Confirmation