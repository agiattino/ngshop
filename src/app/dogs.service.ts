import { Injectable, OnInit, } from '@angular/core';
import DOGS from './dogdata.json';  
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root' ,
})
export class DogsService implements OnInit {
  private dogData = DOGS;

  constructor() {
    const likes = localStorage.getItem('likes');
    if (!likes) {
      localStorage.setItem('likes', JSON.stringify([]));
   }
  }

  all(): Observable <Dog[]> {
    return of (this.dogData)
  }
  

  get(dogId: string): Dog[] {
    return this.dogData.filter(dog => dog.id === dogId);
  }

  getLikes(dogId: string): number {
    const likes = JSON.parse(localStorage.getItem('likes'));
    // tslint:disable-next-line:radix
    return parseInt(likes[dogId]);
  }

  update(dog): void {
    const likes = JSON.parse(localStorage.getItem('likes')) || localStorage.setItem('likes', JSON.stringify({}));
    likes[dog.id] = dog.likes;
    localStorage.setItem('likes', JSON.stringify(likes));
  }
  
  ngOnInit(): void { 
  }
 
}
