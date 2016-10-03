import { Mongo } from 'meteor/mongo';

/**
 * @module imports/api/item/itemModel
 * @type {Mongo.Collection}
 *
 * Declares the Items collection. A representation of the auction item which is going to be sold.
 */

export const Items = new Mongo.Collection('items');
