import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PnfComponent } from './components/pnf/pnf.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '**', component: PnfComponent }
];
export const Route = [
  PnfComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
