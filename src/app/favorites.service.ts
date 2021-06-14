import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Dog[];


  constructor() {
    const favs = localStorage.getItem('favorites');
    if (!favs) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};

   }

   all(): Observable<Dog[]> {
    return of(this.favorites);
  }

  update(dog) {
    const userFavs = this.favorites;
    userFavs.push(dog);
    localStorage.setItem('favorites', JSON.stringify(userFavs));
  }

}
