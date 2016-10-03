import { Meteor } from 'meteor/meteor';
import { Auctions } from './auctionModel.js'

/**
 * @module api/auction/auctionMethods
 * Defines Meteor methods related to the auction business logic.
 */

Meteor.methods({
  /**
   * Place a bid from a user.
   * @param auction Auctions instance.
   */
  'bid.place': function (auction) {
    check(auction, Object);
    // Check if user is authorized / logged in
    if(! this.userId){
      throw new Meteor.Error('not authorized!');
    };
    const currentAuction = Auctions.findOne(auction._id);
    if (currentAuction.highestBidder.length === 0) {
      const mutator = { $set: { highestBidder: Meteor.user().emails[0].address}};
      const id = currentAuction._id;
      Auctions.update(currentAuction._id, mutator)
    }
    return;
  },
  /**
   * Resets the auction's highest bidder. Only for demonstration purposes.
   * @param auction
   */
  'bid.reset': function (auction) {
    check(auction, Object);
    // Check if user is authorized / logged in
    if(this.userId){
      const mutator = { $set: { highestBidder: ''}};
      Auctions.update(auction._id, mutator);
    } else {
      throw new Meteor.Error('not authorized!');
    }
  }
})
