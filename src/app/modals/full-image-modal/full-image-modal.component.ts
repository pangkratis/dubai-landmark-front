import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-image-modal',
  templateUrl: './full-image-modal.component.html',
  styleUrls: ['./full-image-modal.component.css']
})
export class FullImageModalComponent implements OnInit {

  @Input() landmark: Parse.Attributes

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  open(content: any) {
    this.modalService.open(content, {size: 'lg', centered: true})
  }
}
