import { Component, OnInit } from '@angular/core';
import { StoreService } from "../store.service";
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokes: any = {};

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.getJokes()
  }

  getJokes(){
    this.store.getChcukJokes().subscribe((response: any) =>{
      this.jokes = response;
      console.log(this.jokes)
    })
  }

}
