import React, { Component } from 'react';
import {db} from './firebaseConfig';
import { v4 as uuid } from 'uuid';
import 'firebase/database';
import firebase from 'firebase/compat/app';
import {ref} from 'firebase/database';
import './MovieSurvey.css'
// require firebase
//const firebase = require('firebase');

// reuire uuid
// const uuid = uuidv4();

class MovieSurvey extends Component {

  answerSelected(event){
    let answers = this.state.answers
    if(event.target.name === "answer1"){
      answers.answer1 = event.target.value
      console.log(answers.answer1)
    }else if(event.target.name === "answer3"){
      answers.answer3 = event.target.value
      console.log(answers.answer3)
    } else if(event.target.name === "answer3"){
      answers.answer3 = event.target.value
      console.log(answers.answer3)
    } else if(event.target.name === "answer4"){
      answers.answer4 = event.target.value
      console.log(answers.answer4)
    } else if(event.target.name === "answer5"){
      answers.answer5 = event.target.value
      console.log(answers.answer5)
    } else if(event.target.name === "answer6"){
      answers.answer6 = event.target.value
      console.log(answers.answer6)
    } else if(event.target.name === "answer7"){
      answers.answer7 = event.target.value
      console.log(answers.answer7)
    } else if(event.target.name === "answer8"){
      answers.answer8 = event.target.value
      console.log(answers.answer8)
    } else if(event.target.name === "answer9"){
      answers.answer9 = event.target.value
      console.log(answers.answer9)
    } else if(event.target.name === "answer10"){
      answers.answer10 = event.target.value
      console.log(answers.answer10)
    } 
    this.setState({answers: answers}, function(){
      console.log(this.state);
    })
  }

  questionsSubmit(event){
    event.preventDefault();
    this.setState({submitted: true});
      // ref(db, "responses/"+this.state.uid).set({
      //   answer1: this.state.answers.answer1,
      //   answer3: this.state.answers.answer3,
      //   answer3: this.state.answers.answer3,
      //   answer4: this.state.answers.answer4,
      //   answer5: this.state.answers.answer5,
      //   answer6: this.state.answers.answer6,
      //   answer7: this.state.answers.answer7,
      //   answer8: this.state.answers.answer8,
      //   answer9: this.state.answers.answer9,
      //   answer10: this.state.answers.answer10,
      // })
  }

  genreForm(event){
    let genre = event.target.value
    this.setState({genre: genre}, function(){
      console.log(this.state);
    })
  }

  surveySubmit(event){
    event.preventDefault();
    this.setState({surveySubmit: true})

    // ref(db, "responses/" + this.state.uid).set({
    //   answer1: this.state.answers.answer1,
    //   answer3: this.state.answers.answer3,
    //   answer3: this.state.answers.answer3,
    //   answer4: this.state.answers.answer4,
    //   answer5: this.state.answers.answer5,
    //   answer6: this.state.answers.answer6,
    //   answer7: this.state.answers.answer7,
    //   answer8: this.state.answers.answer8,
    //   answer9: this.state.answers.answer9,
    //   answer10: this.state.answers.answer10,
    //   genre: this.state.genre,
    // })
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid,

      page: 2,

      answers: {
        answer1: "",
        answer3: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
      },
      submitted: false,

      genre: "",

      surveySubmit: false, 
    };
    this.answerSelected = this.answerSelected.bind(this);
    this.questionsSubmit = this.questionsSubmit.bind(this);
    this.genreForm = this.genreForm.bind(this);
    this.surveySubmit = this.surveySubmit.bind(this);
  }

  render(){
    let welcome;
    let questions;
    let genre;
    let ending;

    if(this.state.submitted === false){
      welcome = <div className='opening'>
            <div className='caption'>
              <h4 className='caption1'>
                <span>Jak </span><span>myślisz, </span><span>da </span><span>się </span><span>przewidzieć </span><span>ulubiony </span><span>gatunek </span><span>filmu </span><span>na </span><span>podstawie </span><span>testu </span><span>psychologicznego? </span> 
              </h4>
              <h5 className='caption2'>
                Pomóż mi to sprawdzić! 

                Wypełnij krótką ankietę, a na jej końcu podaj swój ulubiony gatunek filmowy. 
                W przyszłości wykorzystam to do stworzenia aplikacji, która dzięki AI dopasuje film do użytkownika! 
              </h5>
            </div>
            <canvas id="noise" class="noise"></canvas>
            <div class="vignette"></div>
        </div>;
        questions = <div>
          <h3 className='start'>
             Zaznacz, w jakim stopniu poniższe stwierdzenia opisują Ciebie
          </h3>
          <form onSubmit={this.questionsSubmit} className='form'>
            <div className='question'>
              <label className='question-q'>Mam bujną wyobraźnię</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer1" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer1-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer1" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer1-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer1" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer1-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer1" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer1-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer1" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer1-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
        
            <div className='question'>
              <label className='question-q'>Lubię się ekscytować</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer3-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer3-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer3-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer3-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer3-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
      
            <div className='question'>
              <label className='question-q'>Łatwo się irytuję</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer3-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer3-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer3-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer3-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer3" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer3-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Wolę trzymać się rzeczy, które znam</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer4" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer4-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer4" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer4-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer4" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer4-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer4" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer4-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer4" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer4-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Przejmuję inicjatywę</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer5" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer5-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer5" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer5-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer5" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer5-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer5" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer5-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer5" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer5-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Nie jestem zainteresowany teoretyczną dyskusją</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer6" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer6-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer6" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer6-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer6" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer6-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer6" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer6-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer6" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer6-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Czuję się komfortowo otoczony ludźmi</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer7" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer7-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer7" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer7-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer7" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer7-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer7" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer7-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer7" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer7-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Ufam temu, co mówią inni</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer8" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer8-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer8" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer8-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer8" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer8-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer8" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer8-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer8" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer8-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Jestem obojętny na uczucia innych</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer9" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer9-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer9" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer9-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer9" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer9-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer9" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer9-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer9" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer9-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='question'>
              <label className='question-q'>Ciągle poszukuję nowych przygód</label>
              <div className='radio-container'>
                <div className='radio-input'>
                  <input type="radio" name="answer10" value="5" onChange={this.answerSelected} id="answer1-5" className='radio-input'/>
                  <label for="answer10-5" className='radio-label'>Zdecydowanie tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer10" value="4" onChange={this.answerSelected} id="answer1-4" className='radio-input'/>
                  <label for="answer10-4" className='radio-label'>Raczej tak</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer10" value="3" onChange={this.answerSelected} id="answer1-3" className='radio-input'/>
                  <label for="answer10-3" className='radio-label'>Trudno powiedzieć</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer10" value="2" onChange={this.answerSelected} id="answer1-2" className='radio-input'/>
                  <label for="answer10-2" className='radio-label'>Raczej nie</label>
                </div>
                <div className='radio-input'>
                  <input type="radio" name="answer10" value="1" onChange={this.answerSelected} id="answer1-1" className='radio-input'/>
                  <label for="answer10-1" className='radio-label'>Zdecydowanie nie</label>
                </div>
              </div>
            </div>
            
            <div className='submitButtonContainer'>
              <input type="submit" value="Przejdź dalej" className="submitButton"/>
            </div>
          </form>
        </div>
    } else if (this.state.submitted === true && this.state.surveySubmit === false){
      genre = <div className='genre-question'>
        <div className='genre-question2'>Jaki jest Twój ulubiony gatunek filmu?</div>
        <form onSubmit={this.surveySubmit}>
          <div className='genre-input'>
            <label>Wpisz jedną nazwę</label>
            <br />
            <br />
            <textarea name="genre" cols="40" rows="1" onChange={this.genreForm}>

            </textarea>
          </div>
          <br />
          <input type="submit" value="Zakończ ankietę" className="submitButton"/>
        </form>
      </div>
    } else if(this.state.submitted === true && this.state.surveySubmit === true){
      ending = <div className='ending'>
        <div className='thanks'>Dziękuję!</div>
        <canvas id="noise" class="noise"></canvas>
        <div class="vignette"></div>
      </div>
    }
    return(
      <div>
        {welcome}
        {questions}
        {genre}
        {ending}
      </div>
    );
  }
}

export default MovieSurvey;


