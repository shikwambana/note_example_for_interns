import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  saveNote(note: string){
    console.log('received note',note)

    let body = {
      "note" : note
    }

    return this.http.post('https://cl2.io/ebd2d5bc-f69f-4d68-94ee-fca80fee467e/',body).subscribe(res =>{
      console.log(res)
    })
  }

  getNotes(){
    return this.http.get('https://collect2.com/api/ebd2d5bc-f69f-4d68-94ee-fca80fee467e/datarecord/')
  }

  getChcukJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}
