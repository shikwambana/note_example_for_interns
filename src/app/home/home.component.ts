import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myName: string = ''

  showQuestion = {
    gender: true,
    employed: false,
    over18: false,
    showAnswer: false
  }

  myAnswers = {
    gender: true,
    employed: true,
    over18: true
  }

  genderQ = {
    question: "What is your Gender",
    trueAnswer: "I am Male",
    falseAnswer: "I am Female",
  }
  
  employmentQ = {
    question: "Are you employed?",
    trueAnswer: "Yes I am",
    falseAnswer: "No",
  }

  ageQ = {
    question: "Are you over 18?",
    trueAnswer: "Yes I am",
    falseAnswer: "No, I am underage",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  saveName(name : string){
    this.myName = name;
  }

  saveGender(gender: boolean){
    this.myAnswers.gender = gender
    console.log(this.myAnswers)
  }

  saveEmp(gender: boolean){
    this.myAnswers.employed = gender
    console.log(this.myAnswers)
  }

  saveAge(gender: boolean){
    this.myAnswers.over18 = gender
    console.log(this.myAnswers)
  }

  goNext(){

    if(this.showQuestion.gender){
      this.showQuestion.employed = true;
      this.showQuestion.gender = false;
    }else if(this.showQuestion.employed){
      this.showQuestion.employed = false;
      this.showQuestion.over18 = true;
    }else if(this.showQuestion.over18){
      this.showQuestion.showAnswer = true;
      this.showQuestion.over18 = false;
    }
  }

}
