import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasterComponent } from './Components/caster/caster.component';
import { ConvertingComponent } from './Components/converting/converting.component';
import { DispatcherPlanningComponent } from './Components/dispatcher-planning/dispatcher-planning.component';


const routes: Routes = [
  {path:'dis',component:DispatcherPlanningComponent},{path:'converting',component:ConvertingComponent},
  {path:'caster',component:CasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
