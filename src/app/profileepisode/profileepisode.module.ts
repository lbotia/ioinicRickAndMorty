import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileepisodePageRoutingModule } from './profileepisode-routing.module';

import { ProfileepisodePage } from './profileepisode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileepisodePageRoutingModule
  ],
  declarations: [ProfileepisodePage]
})
export class ProfileepisodePageModule {}
