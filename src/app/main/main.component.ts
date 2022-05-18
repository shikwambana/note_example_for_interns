import { Component, OnInit } from '@angular/core';
import { StoreService } from "../store.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  note: string = '';
  notes: [] = [];
  constructor(private storeMyStuff: StoreService) {

   }

  ngOnInit(): void {
    console.log('no')
    this.getMyNotes()
  }

  submit(){
    this.storeMyStuff.saveNote(this.note)
  }

  getMyNotes(){
    this.storeMyStuff.getNotes().subscribe((res : any) =>{
      console.log(res)
      this.notes = res['results'];
   })
  }

}
