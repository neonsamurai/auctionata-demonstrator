import { Meteor } from 'meteor/meteor';
import { Items } from '../imports/api/item/itemModel.js';
import {Auctions} from '../imports/api/auction/auctionModel.js';
import './fixtures.js';

Meteor.startup(() => {
  Meteor.publish('item', function(){
    return Items.find();
  });
  Meteor.publish('auction', function() {
    return Auctions.find();
  })
});
