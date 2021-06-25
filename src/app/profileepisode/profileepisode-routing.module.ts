import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileepisodePage } from './profileepisode.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileepisodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileepisodePageRoutingModule {}
