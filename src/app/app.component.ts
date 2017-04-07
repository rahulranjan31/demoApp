import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {
    this.options= {
        title: {text: 'simple chart'},
        series: [{
          data:[25.9, 73.4, 105, 130]
        }],
    };
}
  options: Object;
}
