import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {DairyComponent} from './dairy.component';


const routes: Routes = [
    { path: '', redirectTo: '/dairy', pathMatch: 'full' },
    { path: 'dairy', component: DairyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DairyRoutingModule { }
