import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() color = 'yellow';
  @Output() sentmessage= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  send() {
    this.sentmessage.emit(this.color);
  }

}
