import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  
  @Input() landmark: Parse.Attributes
  openFullImageModal = false

  constructor() { }


  ngOnInit(): void {
  }
}
