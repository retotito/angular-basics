import { AuthorsService } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: String[];
  amount: number;
  myAttribute ="myAttributeValue";
  isActive = false;
  email = "default@mail.com";
  price ="190.1256";

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
    this.amount = this.authors.length;
  }

  onSave($event) {
    console.log('clicked', $event);
  }

  onKeyUp() {
    console.log ('email: '+this.email);
  }

  ngOnInit() {
  }

}
