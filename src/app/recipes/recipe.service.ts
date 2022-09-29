// import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-High-Quality-Image.png'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-High-Quality-Image.png'
    ),
    // we create a new object based on our class
  ];

  getRecipes() {
    return this.recipes.slice(); // Returns a new array which is an exact copy of the one above
  }
}
