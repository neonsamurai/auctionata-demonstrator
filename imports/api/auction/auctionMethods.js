import { Meteor } from 'meteor/meteor';
import { Auctions } from './auctionModel.js'

Meteor.methods({
  'bid.place': function (auction, userId) {
    console.log(auction);
    const currentAuction = Auctions.findOne(auction._id);
    if (currentAuction.highestBidder.length === 0) {
      console.log(currentAuction);
      const mutator = { $set: { highestBidder: Meteor.user().emails[0].address}};
      const id = currentAuction._id;
      console.log(mutator);
      console.log(id);
      Auctions.update(currentAuction._id, mutator)
    }
    return;
  },
  'bid.reset': function (auction, userId) {
    if(Meteor.userId){
      const mutator = { $set: { highestBidder: ''}};
      Auctions.update(auction._id, mutator);
    }
  }
})
