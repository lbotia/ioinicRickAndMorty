import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserlistPageRoutingModule } from './userlist-routing.module';

import { UserlistPage } from './userlist.page';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserlistPageRoutingModule,
    PipesModule
  ],
  declarations: [UserlistPage]
})
export class UserlistPageModule {}
