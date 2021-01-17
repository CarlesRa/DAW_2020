import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'eventos/show', loadChildren: () => 
    import('./components/eventos-show/eventos-show.module').then(m => m.EventosShowModule)  
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'eventos/show'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
