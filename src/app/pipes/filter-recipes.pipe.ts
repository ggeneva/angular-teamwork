import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Pipe({
  name: 'filterRecipes',
  pure: false
})
export class FilterRecipesPipe implements PipeTransform {

  transform(recipes: Recipe[], filter?: any): any {
    let filtered: Recipe[] = recipes;

    if (!filter) {
      return recipes;
    }

    if (filter.search) {
      console.log(filter);
      filtered = filtered.filter(recipe => recipe.name.toLowerCase().indexOf(filter.search.toLowerCase()) !== -1);
    }

    if (filter.servings) {
      const bounderies = filter.servings.split(' ');

      if (bounderies.length === 1) {
        filtered = filtered.filter(recipe =>
          recipe.servings === bounderies[0]
        );
      } else if (bounderies.length === 2) {
        filtered = filtered.filter(recipe =>
          bounderies[0] * 1 <= recipe.servings * 1 &&
          recipe.servings * 1 <= bounderies[1] * 1
        );
      }
    }

    if (filter.preparationTime) {
      const bounderies = filter.preparationTime.split(' ');

      if (bounderies.length === 1) {
        filtered = filtered.filter(recipe =>
          recipe.preparationTime === bounderies[0]
        );
      } else if (bounderies.length === 2) {
        filtered = filtered.filter(recipe =>
          bounderies[0] * 1 <= recipe.preparationTime * 1 &&
          recipe.preparationTime * 1 <= bounderies[1] * 1
        );
      }
    }

    if (filter.cookingTime) {
      const bounderies = filter.cookingTime.split(' ');

      if (bounderies.length === 1) {
        filtered = filtered.filter(recipe =>
          recipe.cookingTime === bounderies[0]
        );
      } else if (bounderies.length === 2) {
        filtered = filtered.filter(recipe =>
          bounderies[0] * 1 <= recipe.cookingTime * 1 && recipe.cookingTime * 1 <= bounderies[1] * 1
        );
      }
    }

    return filtered;
  }

}
