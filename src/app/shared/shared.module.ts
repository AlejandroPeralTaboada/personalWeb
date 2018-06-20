import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../components/navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule, NavigationModule
  ],
  declarations: [],
  exports: [ NavigationModule]
})
export class SharedModule { }
