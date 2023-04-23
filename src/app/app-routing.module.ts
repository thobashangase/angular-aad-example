import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule), pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(mod => mod.ProfileModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
