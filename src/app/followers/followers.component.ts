import { FollowerService } from './../services/follower/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[] = [{login:"max"},{login:"peter"}];

  constructor(private service: FollowerService) { }

  ngOnInit() {
    console.log('init');
    this.service.getAll()
    .subscribe(followers => this.followers = followers);
  }

}
