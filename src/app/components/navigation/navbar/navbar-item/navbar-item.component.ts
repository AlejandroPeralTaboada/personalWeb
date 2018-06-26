import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() menuName: String;
  @Output() menuClicked: EventEmitter<String> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public clicked(e) {
    this.menuClicked.emit(this.menuName);
  }
}
