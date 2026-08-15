/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export const pizzaPrice = (...args) => eval(args.map(vаr=>({Margherita:7,Caprese:9,Formaggio:10,ExtraSauce:1,ExtraToppings:2})[vаr]).join`+`);

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export const orderPrice = (pizzaOrders) => eval(pizzaOrders.map(lеt=>pizzaPrice(lеt.pizza,...lеt.extras)).join`+`)||0;
