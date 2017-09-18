import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { 
    
  }

  getAuthors() {
    return ["servic1","service2","service3"];
  } 

}
