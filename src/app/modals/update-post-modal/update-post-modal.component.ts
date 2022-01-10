import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as Parse from 'parse'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-post-modal',
  templateUrl: './update-post-modal.component.html',
  styleUrls: ['./update-post-modal.component.css']
})

export class UpdatePostModalComponent implements OnInit {

  closeResult = '';
  title = '';
  description = '';
  short_info = '';
  photo_thumb = '';
  file: File
  success = false
  error = false

  constructor(private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string // Get landmark id from url
    const Landmarks = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmarks);
    query.get(id).then(i => {
      this.title = i.attributes['title']
      this.description = i.attributes['description']
      this.short_info = i.attributes['short_info']
      this.photo_thumb = i.attributes['photo_thumb']
    })
  }

  updatePostButton = () => {
    this.modalService.dismissAll()
    const id = this.route.snapshot.paramMap.get('id') as string
    const Landmarks = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmarks);
    query.get(id).then(i => {
      console.log(this.file)
      i.set('title', this.title)
      i.set('description', this.description)
      i.set('short_info', this.short_info)
      if(this.file !== undefined) {
        let parseFile = new Parse.File(this.file.name, this.file)
        if(this.file.size > 5000000){
          window.alert('file too large')
        }
        else{
          i.set('photo',parseFile)
        }
      }
      i.save()
      this.error = false
      this.success = true
    }).catch((error) => {
      console.log(error)
      this.success = false
      this.error = true
    })
  }
  
  fileUpload = (event: Event) => {  
    const target= event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  open = (content) => {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true})
  }
}
