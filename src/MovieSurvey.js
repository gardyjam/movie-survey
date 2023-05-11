import React, {Component} from "react";
//import database from 'firebase';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from "firebase/app";
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

class MovieSurvey extends Component {

    interNameSubmit(event){
        var name = this.refs.name.value;
        this.setState({interName : name}, function(){
            console.log(this.state);
        } )
    }

    constructor(props){
        super(props);

        this.state={
            uid:uuid.v1(),
            interName:'',
            answers:{
                a1:'',
                a2:'',
                a3:'',
            },
            isSubmitted:false
        };
        this.interNameSubmit = this.interNameSubmit.bind(this)
    }
    render(){
        var name = '';
        var questions = '';

        if(this.state.interName === '' && this.state.isSubmitted === false) {
            name = <div>
                <h3>Please enter your name: </h3>
                <form onSubmit={this.interNameSubmit}>
                    <input className="form-name" type="text" placeholder="Your name" ref="name" />
                </form>
            </div>
        }



        return (
            <div>
                <h1>My fav movie is LaLaLand c:</h1>
                <h2>And yours?</h2>

                {name}
                =======================
                {questions}
            </div>
        )
        }
}

export default MovieSurvey