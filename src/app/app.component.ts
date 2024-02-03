import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  colors = ['red','blue', 'green'];

  gotMessage(value: any) {
    console.log(value);
  }
}
