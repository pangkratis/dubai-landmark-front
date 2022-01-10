import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as Parse from 'parse';

@Component({
  selector: 'app-full-landmark-article',
  templateUrl: './full-landmark-article.component.html',
  styleUrls: ['./full-landmark-article.component.css']
})
export class FullLandmarkArticleComponent implements OnInit {

  currentUser = Parse.User.current()
  landmark: Parse.Attributes = {}

  constructor(private route: ActivatedRoute){}
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string // get landmark's id from url
    const Landmarks = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmarks);
    query.get(id).then(i => {
      this.landmark = i.attributes
    })
  }

}
