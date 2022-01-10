import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as Parse from 'parse'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser = Parse.User.current()

  constructor(private route: Router) { }

  ngOnInit() {
  }
}
