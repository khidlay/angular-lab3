import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile!: UserProfile; // Step 2: place to store object
  constructor(private myService: ProfileService) {} // Step 1: dependency injection

  ngOnInit(): void {
    this.userProfile = this.myService.getUserProfile(); // Step 3: returns object
    console.log(this.userProfile);
  }
}
