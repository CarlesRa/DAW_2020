import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveChangeGuard } from 'src/app/guards/save-change.guard';
import { EventoAddComponent } from './evento-add.component';

const routes: Routes = [
  { path: '', canDeactivate: [SaveChangeGuard], component: EventoAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoAddRoutingModule { }
