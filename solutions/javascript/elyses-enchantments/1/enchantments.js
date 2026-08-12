// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export const getItem = (cards, position) => cards.slice(position).shift();

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export const  setItem = (cards, position, replacementCard) => cards.splice(position,1,replacementCard) && cards;

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export const insertItemAtTop = (cards, newCard) => [...cards, newCard].map((card,index)=>cards[index]=card);

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export const removeItem = (cards, position) => cards.splice(position,1) && cards;

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export const removeItemFromTop = cards => ((cards.length -= 1), cards);

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export const insertItemAtBottom = (cards, newCard) => [newCard, ...cards].map((card,index)=>cards[index]=card);

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export const removeItemAtBottom = cards => cards.shift() && cards;

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export const checkSizeOfStack = (cards, stackSize) => new URLSearchParams(cards.entries()).size === stackSize;
