import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-title',
  templateUrl: './nav-title.component.html',
  styleUrls: ['./nav-title.component.scss']
})
export class NavTitleComponent implements OnInit {
  @Output()
  toggleClick = new EventEmitter<Boolean>();

  private state = false;
  constructor() {}

  ngOnInit() {}

  public clicked() {
    this.state = !this.state;
    this.toggleClick.emit(this.state);
  }
}
