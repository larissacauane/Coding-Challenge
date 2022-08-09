function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer === undefined) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

function quantities(layers) {
  return {
    noodles: layers.filter((entry) => entry === "noodles").length * 50,
    sauce: layers.filter((entry) => entry === "sauce").length * 0.2,
  };
}

function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

function scaleRecipe(recipe, persons) {
  let scaleRecipe = {};
  for (let key in recipe) {
    if (persons === undefined) {
      return recipe;
    }
    scaleRecipe[key] = (recipe[key] / 2) * persons;
  }
  return scaleRecipe;
}
