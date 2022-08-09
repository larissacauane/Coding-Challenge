/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer === undefined) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

export function quantities(layers) {
  return {
    noodles: layers.filter((entry) => entry === "noodles").length * 50,
    sauce: layers.filter((entry) => entry === "sauce").length * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, persons) {
  let scaleRecipe = {};
  for (let key in recipe) {
    if (persons === undefined) {
      return recipe;
    }
    scaleRecipe[key] = (recipe[key] / 2) * persons;
  }
  return scaleRecipe;
}
