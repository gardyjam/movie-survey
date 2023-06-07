import React, {Component} from "react";
//import database from 'firebase';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from "firebase/app";
import LikertScaleQuestion from "./components/LikertScaleQuestion";
import OpenQuestion from './components/OpenQuestion';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import Confirmation from './steps/Confirmation';
import TheEnd from './steps/TheEnd';
//import { getAnalytics } from "firebase/analytics";

//var firebase = require('firebase');
var uuid = require('uuid');

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo6rTK-IfNmWkbq493vCwcei206kb4sDA",
  authDomain: "movie-survey-c6ed6.firebaseapp.com",
  databaseURL: "https://movie-survey-c6ed6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-survey-c6ed6",
  storageBucket: "movie-survey-c6ed6.appspot.com",
  messagingSenderId: "309672593814",
  appId: "1:309672593814:web:3a827957ac5937828575b7",
  measurementId: "G-HPY5DMWP6P"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// Utworzenie instancji firestore
//const db = firebase.firestore();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

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

    render() {
        const {step} = this.state;

        switch (step) {
            case 1: 
              return (
                // w przyszlosci komponent "introduction - opis projektu itp" 
                <StepOne 
                    nextStep={this.nextStep}
                    handleStepChange={this.handleStepChange}
                />
              )
            case 2: 
              return (
                <StepTwo 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleStepChange={this.handleStepChange}
                />
              )
            case 3: 
              return (
                <StepThree
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleStepChange={this.handleStepChange}
                />
              )
            case 4: 
              return (
                <Confirmation 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
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
