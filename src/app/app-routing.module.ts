import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppPageComponent} from './app-page/app-page.component';

const routes: Routes = [
  {
    path: ':appid',
    component: AppPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
