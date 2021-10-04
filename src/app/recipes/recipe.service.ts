import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
        'Schnitzel', 
        'Tasty Schnitzel', 
        'https://www.gutekueche.at/storage/media/recipe/8028/resp/wiener-schnitzel___webp_460_306.webp',
        [
          new Ingredient('Meat' , 2),
          new Ingredient('French fries', 60)
        ]),
    new Recipe(
        'Burger', 
        'Tasty Burger', 
        'https://www.gutekueche.at/storage/media/recipe-category/7755/resp/burger-rezepte___webp_849_566.webp',
        [
          new Ingredient('Buns' , 2),
          new Ingredient('Paddies', 2)
        ]),
  ];

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }
}