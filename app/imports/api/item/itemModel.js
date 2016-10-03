import { Mongo } from 'meteor/mongo';

/**
 * @module imports/api/item/itemModel
 *
 * Declares the Items collection. A representation of the auction item which is going to be sold.
 */

/**
 *
  * @type {Mongo.Collection}
 */
export const Items = new Mongo.Collection('items');
