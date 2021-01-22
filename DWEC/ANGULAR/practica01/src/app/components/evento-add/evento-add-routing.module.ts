import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoAddComponent } from './evento-add.component';

const routes: Routes = [
  { path: '', component: EventoAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoAddRoutingModule { }
