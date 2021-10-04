import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient, commit: boolean = true) {
    this.ingredients.push(ingredient);
    if(commit) {
      this.ingredientsChanged.emit(this.ingredients.slice()); 
    }
  }
  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient, false);
    }
    this.ingredientsChanged.emit(this.ingredients.slice()); 
  }
}