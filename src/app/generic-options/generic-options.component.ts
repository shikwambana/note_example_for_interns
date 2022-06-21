import {  Output,Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-options',
  templateUrl: './generic-options.component.html',
  styleUrls: ['./generic-options.component.scss']
})
export class GenericOptionsComponent implements OnInit {

  @Output() response = new EventEmitter();

  @Input() optionObject = {
    question: "",
    trueAnswer: "",
    falseAnswer: "",
  }
  answer!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  emitAnswer(answer : boolean){
    console.log(typeof(answer) )
    this.response.emit(answer)
  }

}
