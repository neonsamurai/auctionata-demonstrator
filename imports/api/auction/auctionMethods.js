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
   * @param userId ID of the user who placed the bid.
   */
  'bid.place': function (auction) {
    check(auction, Object);
    if(! this.userId){
      throw new Meteor.Error('not authorized!');
    };
    const currentAuction = Auctions.findOne(auction._id);
    if (currentAuction.highestBidder.length === 0) {
      console.log(currentAuction);
      const mutator = { $set: { highestBidder: Meteor.user().emails[0].address}};
      const id = currentAuction._id;
      Auctions.update(currentAuction._id, mutator)
    }
    return;
  },
  'bid.reset': function (auction) {
    check(auction, Object);
    if(this.userId){
      const mutator = { $set: { highestBidder: ''}};
      Auctions.update(auction._id, mutator);
    } else {
      throw new Meteor.Error('not authorized!');
    }
  }
})
