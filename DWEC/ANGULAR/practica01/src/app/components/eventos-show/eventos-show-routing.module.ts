import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosShowComponent } from './eventos-show.component';

const routes: Routes = [
  { path: '', component: EventosShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosShowRoutingModule { }
