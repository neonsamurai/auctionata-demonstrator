import { Mongo } from 'meteor/mongo';

/**
 * @module imports/api/auction/auctionModel
 * @type {Mongo.Collection}
 *
 * Declares Auctions collection.
 */

export const Auctions = new Mongo.Collection('auctions');
