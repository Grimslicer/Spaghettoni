import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  // @Output() recipeSelected = new EventEmitter<void>();
  // we listen to this event from outside
  @Input() index: number;
  // we can pass in the index of the item from outside
  ngOnInit(): void {}
}
