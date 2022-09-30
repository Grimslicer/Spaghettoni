import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
    // we use the router to use the navigate method to
    // target this path I want to go to
    // Which path is it?
    // We already are on /recipes cuz we are on recipe-list
    // we use a relative route
    // to be able to use one we need to inform the router
    // about our current route
    // we inject it into constructor with activatedRoute
    // we then add the javascript object
    // add the relatieTo config and point tot this route, to my current route
  }
}
