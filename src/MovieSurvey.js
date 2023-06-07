import React, {Component} from "react";
import LikertScaleQuestion from "./components/LikertScaleQuestion";
import OpenQuestion from './components/OpenQuestion';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import Confirmation from './steps/Confirmation';
import TheEnd from './steps/TheEnd';

import firebaseConfig from './firebaseConfig';
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebase = initializeApp(firebaseConfig);
const database = getFirestore(firebase);

export default class MovieSurvey extends Component {

    state = {step: 1,}

    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step-1});
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step+1});
    }

    handleStepChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleSubmit = (e) => {
      
    }

    render() {
        const {step} = this.state;
        //const { ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8} = this.state;
        //const values = {q1, q2, q3, q4, q5, q6, q7, q8};

        switch (step) {
            case 1: 
              return (
                // w przyszlosci komponent "introduction - opis projektu itp" 
                <StepOne 
                    nextStep={this.nextStep}
                />
              )
            case 2: 
              return (
                <StepTwo 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleStepChange={this.handleStepChange}
                    //values = {values}
                />
              )
            case 3: 
              return (
                <StepThree
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleStepChange={this.handleStepChange}
                    //values = {values}
                />
              )
            case 4: 
              return (
                <Confirmation 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    //values = {values}
                />
              )
            case 5:
              return (
                <TheEnd />
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
}
