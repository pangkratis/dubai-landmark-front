import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
import * as Parse from 'parse'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  landmarks: Parse.Attributes[] = []
  constructor() { }

  ngOnInit() {
    const Landmarks = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmarks);
    query.find().then(result => {
      result.forEach(landmark => {
        this.landmarks.push(landmark)
      })
      this.landmarks = _.orderBy(this.landmarks,['attributes.order'],['asc']) // using lodash to order landmarks by field 'order'
    }, (error) => {
      console.log(error)
    });
  }
}
