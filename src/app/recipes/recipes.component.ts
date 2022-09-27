import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}
  logan: any;
  changeMotor() {
    let logan: string;
    this.logan = 'salut';
    logan = 'asa e';
    console.log('Logan', logan);
    console.log('This logan', this.logan);
  }
  ngOnInit(): void {
    this.changeMotor();
  }
}
