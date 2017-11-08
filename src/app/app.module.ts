import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';

import {  RouterModule, Routes } from '@angular/router' ;


const routes: Routes =[
    {path: 'about' , component : AboutComponent },
    {path: 'posts' , component : PostsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

