import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';
import { FavoritesService} from '../favorites.service' ;
 
@Component({
  selector: 'dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog ;
  @Input () id:any;
  likes: number;
  favorites: any;
  
  constructor(private dogService: DogsService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.likes = this.dogService.getLikes(this.dog.id) || 0;
    this.favorites = this.favoritesService.all() || 0;
  }

  addLike() {
    this.likes += 1;
    this.dogService.update({ id: this.dog.id, likes: this.likes });
  }

  addFav() {
    this.favoritesService.update(this.dog);
  }

}
