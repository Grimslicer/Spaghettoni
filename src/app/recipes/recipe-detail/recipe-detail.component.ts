import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  public isOpen = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // We inject the RecipeService
  // Then we add a method into the RecipeService
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // After fetching an id and storing it
      // I want to fetch the new recipe below
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onClickShow() {
    this.isOpen = !this.isOpen;
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // Access recipeService, call the method from service
    // and pass on the ingredients of the recipe
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // This is the typical way
    // for demo purposes down below there's the navigation based on id
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
    // Let's say we move up one level '../' and then we want to add our ID again
    // and then edit
  }
}
