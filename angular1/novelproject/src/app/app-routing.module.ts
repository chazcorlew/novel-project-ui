import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovelcharactersComponent } from './components/novelcharacters/novelcharacters.component';

import { NovelsComponent } from './components/novels/novels.component';

const routes: Routes = [


{
  path: "novels",
  component: NovelsComponent
},

{

  path: "Novelcharacters",
  component: NovelcharactersComponent

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
