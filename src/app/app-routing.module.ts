import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule), pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule) },
  { path: 'todos', loadChildren: () => import('./pages/todos/todos.module').then(mod => mod.TodosModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
