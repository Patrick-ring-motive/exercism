/// <reference path="./global.d.ts" />

export function cookingStatus(...args){
  if(args[0] === 0)return 'Lasagna is done.';
  if(!args[0])return 'You forgot to set the timer.';
  return 'Not done, please wait.';
}

export function preparationTime(layers,min=2){
  return layers.length * min;
}

export function quantities(layers){
  return {
    noodles:layers.filter(x=>x==='noodles').length * 50,
    sauce:layers.filter(x=>x==='sauce').length * 0.2
  };
}

export function addSecretIngredient(friendsList, myList){
  myList.push([...friendsList].pop());
};

export function scaleRecipe(recipe, scale){
  const scaledRecipe = {...recipe};
  for(const ingredient in scaledRecipe){
    scaledRecipe[ingredient] *= scale/2;
  }
  return scaledRecipe;
}
