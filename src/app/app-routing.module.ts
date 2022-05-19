import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { JokesComponent } from "./jokes/jokes.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: MainComponent,
    path: 'notes',
  },
  {
    component: JokesComponent,
    path: 'jokes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
