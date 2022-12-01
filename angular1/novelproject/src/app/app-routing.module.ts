import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovelsComponent } from './components/novels/novels.component';

const routes: Routes = [


{
  path: "novel",
  component: NovelsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
