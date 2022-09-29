// import { Injectable } from '@angular/core';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
// We access the shopping-list service
// We inject a service into a service with @Injectable
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super taste schnitzel, yo',
      'https://www.picng.com/upload/schnitzel/png_schnitzel_16024.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        // we use the Ingredient() constructor!
        //
      ]
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-High-Quality-Image.png',
      []
    ),
    // we create a new object based on our class
  ];

  constructor(private slService: ShoppingService) {}
  // we can now inject the service into the constructor
  // add the slService

  getRecipes() {
    return this.recipes.slice(); // Returns a new array which is an exact copy of the one above
  }

  getRecipe(index: number) {
    return this.recipes[index];
    // Functie ce ia index ca parametru
    // returneaza o copie de recipes daca are slice
    // si selecteaza item - ul la acest index
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // Here we expect to receive ingredients
    this.slService.addIngredients(ingredients);
    // We can now reach out here slService, and
    // and now we need to add a new method
  }
}
