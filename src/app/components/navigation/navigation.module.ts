import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, NavbarItemComponent, SearchbarComponent],
  exports: [NavbarComponent, SearchbarComponent]
})
export class NavigationModule { }
