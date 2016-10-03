import { Mongo } from 'meteor/mongo';

/**
 * @module imports/api/auction/auctionModel
 *
 * Declares Auctions collection.
 */

/**
 *
  * @type {Mongo.Collection}
 */
export const Auctions = new Mongo.Collection('auctions');
