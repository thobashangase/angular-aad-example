import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(mod => mod.ProfileModule), canActivate: [MsalGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
