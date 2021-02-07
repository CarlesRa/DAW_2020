import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailResolver } from 'src/app/resolvers/event-detail.resolver';
import { EventoDetailComponent } from './evento-detail.component';

const routes: Routes = [
  { path: '', component: EventoDetailComponent,
   resolve: { evento: EventDetailResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoDetailRoutingModule { }
