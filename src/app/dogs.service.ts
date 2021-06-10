import { Injectable, OnInit, } from '@angular/core';
import DOGS from './dogdata.json';  
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService implements OnInit {
  private dogData = DOGS;
  constructor() { }

  all(): Observable<Dog[]> {
    return of(this.dogData);
  }
  
  ngOnInit(): void {
    

  }
}
