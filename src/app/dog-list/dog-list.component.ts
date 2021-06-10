import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service'

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  title =  'Dog List' ; 
  dogs:Dog[] = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getUpdates();
  }

  getUpdates() {
    return this.dogsService.all().subscribe(data => this.dogs = data);
  }

}
