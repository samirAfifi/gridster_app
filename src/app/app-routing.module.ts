import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverViewComponent } from './components/over-view/over-view.component';
import { AudienceComponent } from './components/audience/audience.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo:'overView', pathMatch:'full' },
  { path:'overView', component:OverViewComponent},
  {path:'audience',component:AudienceComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
