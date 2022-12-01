import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovelmenuComponent } from './components/novelmenu/novelmenu.component';

const routes: Routes = [


{
  path: "novelmenu",
  component: NovelmenuComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
