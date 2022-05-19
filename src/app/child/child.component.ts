import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  name: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    this.newItemEvent.emit(this.name);
  }

}
