import { EventEmitter, Injectable, ɵisListLikeIterable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    //  Spread operator ... we can spread our ingredients into a
    // list of single ingredients which are now pushed without
    // issues to ingredients array
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  // We will receive the list of ingredients
  // the method for the recipe service
  //addIngredientsToShoppingList's method
}
