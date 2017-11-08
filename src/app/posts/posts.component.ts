import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    articles = [
        {titre:"jazz"},
        {titre:"saoul"},
        {titre:"funk"},
        {titre:"bluse"},
        {titre:"pop"},
        {titre:"rock"},
    ]

  constructor() { }

  ngOnInit() {
  }

}
