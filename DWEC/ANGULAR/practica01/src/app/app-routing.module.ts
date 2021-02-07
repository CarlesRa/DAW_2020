import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'eventos', loadChildren: () =>
    import('./components/eventos-show/eventos-show.module').then(m => m.EventosShowModule)
  },
  {
    path: 'eventos/add', loadChildren: () =>
    import('./components/evento-add/evento-add.module').then(m => m.EventoAddModule)
  },
  {
    path: 'eventos/:id', loadChildren: () =>
    import('./components/evento-detail/evento-detail.module').then(m => m.EventoDetailModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'eventos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
