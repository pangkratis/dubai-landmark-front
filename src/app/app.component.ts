import { Component } from '@angular/core';

import * as Parse from 'parse'



Parse.initialize("NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi");
(Parse as any).serverURL = 'http://localhost:5000/parse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  ngOnInit() {}

  
}
