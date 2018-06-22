import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavTitleComponent } from './navbar/nav-title/nav-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, NavbarItemComponent, SearchbarComponent, NavTitleComponent],
  exports: [NavbarComponent, SearchbarComponent]
})
export class NavigationModule { }
