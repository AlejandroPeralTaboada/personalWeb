import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'technologies',
    loadChildren: './components/technologies/technologies.module#TechnologiesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
