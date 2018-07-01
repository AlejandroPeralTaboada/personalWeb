import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, TechnologiesRoutingModule, SharedModule],
  declarations: [TechnologiesComponent]
})
export class TechnologiesModule {}
