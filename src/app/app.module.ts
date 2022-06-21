import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomComponent } from './hom/hom.component';
import { JokesComponent } from './jokes/jokes.component';
import { ChildComponent } from './child/child.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GenericOptionsComponent } from './generic-options/generic-options.component';
import { OneOptionComponent } from './one-option/one-option.component';

const firebaseConfig = {
  apiKey: "AIzaSyCiqa1cFqrubiUAeMKEW3hg1r73XnawMIs",
  authDomain: "interns-training.firebaseapp.com",
  projectId: "interns-training",
  storageBucket: "interns-training.appspot.com",
  messagingSenderId: "379397478383",
  appId: "1:379397478383:web:daee7fa5db1384d5a4c81a",
  measurementId: "G-47YBCD7L8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent, MainComponent, HomeComponent, HomComponent, JokesComponent, ChildComponent, GenericOptionsComponent, OneOptionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule 
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
