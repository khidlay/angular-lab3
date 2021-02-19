import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Kerry Hidlay',
    contact: 'hello@kerryhidlay.com',
    bio: 'Graphic Designer / Grand Circus Front-End Student',
  };

  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile; // if component needs this object, they can call this method to get it.
  };

  setUserProfile = (updateUserData: UserProfile): void => {
    this.userProfile = updateUserData;
  };
}
