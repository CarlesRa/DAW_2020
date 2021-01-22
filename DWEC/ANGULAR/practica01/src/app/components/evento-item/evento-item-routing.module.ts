import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoItemComponent } from './evento-item.component';

const routes: Routes = [
  { path: '', component: EventoItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoItemRoutingModule { }
