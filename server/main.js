import { Meteor } from 'meteor/meteor';
import { Items } from '../imports/api/item/itemModel.js';
import {Auctions} from '../imports/api/auction/auctionModel.js';
import '../imports/api/auction/auctionMethods.js';
import './fixtures.js';

/**
 * @module server/main
 * Wires up all the necessary imports for the server side. This includes Mongo collections and Meteor methods as well as
 * publications.
 */

Meteor.startup(() => {
  Meteor.publish('item', function(){
    return Items.find();
  });
  Meteor.publish('auction', function() {
    return Auctions.find();
  })
});
