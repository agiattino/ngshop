import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
