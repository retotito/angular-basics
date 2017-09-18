import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  courses = [
    {id:1, name: "course1"},
    {id:2, name: "course2"},
    {id:3, name: "course3"},
    {id:4, name: "course4"},
    {id:5, name: "course5"}
  ]

  myElement = {
    name: "Max Muster"
  };

  onLoadList () {
    this.courses = [
      {id:1, name: "course1"},
      {id:2, name: "course2"},
      {id:3, name: "course3"},
      {id:4, name: "course4"},
      {id:5, name: "course5"},
      {id:6, name: "course6"}
    ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  

  onFavoriteChanged($event) {
    console.log("changed", $event);
  }


}
