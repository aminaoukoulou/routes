import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    articles = [
        {titre:"jazz", date:"01 Janvier 2018"},
        {titre:"saoul", date:"11 Janvier 2018"},
        {titre:"funk",date:"09 Decembre 2017"},
        {titre:"bluse",date:"13 Novembre 2017"},
        {titre:"pop",date:"31 Décembre 2017"},
        {titre:"rock",date:"08 Novembre 2017"},
    ]

  constructor() { }

  ngOnInit() {
  }

}
