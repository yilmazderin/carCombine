import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/pages/results/results.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:searchTerm', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
