import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ScoringsComponent } from './scorings/scorings.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  {path:'scorings',component:ScoringsComponent},
  {path:'standings',component:StandingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
Router
