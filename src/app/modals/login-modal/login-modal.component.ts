import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import * as Parse from 'parse'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  userLoggedIn = false
  username = ''
  password = ''
  currentUser = Parse.User.current()

  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }
  
  logInFunction = async () => {
    try {
      await Parse.User.logIn(this.username, this.password)
      window.location.reload()
    }
    catch{
      window.alert('Wrong username or password')
      window.location.reload()
    }
  }

  logoutFunction = async () => {
    await Parse.User.logOut()
    window.location.reload()
  }

  // Open login modal
  open(content: any) {
    this.modalService.open(content, {size: 'sm', centered: true})
  }
}
