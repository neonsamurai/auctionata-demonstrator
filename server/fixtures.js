import { Meteor } from 'meteor/meteor';
import { Auctions } from '../imports/api/auction/auctionModel.js';
import { Items } from '../imports/api/item/itemModel.js';

if(Auctions.find().count() === 0){
  console.log('Seeding test data...');
  const item = Items.insert({
    name: 'Pretty Watch',
    description: 'This is a pretty shiny watch with lots of bling.',
    price: 100 * 1000,
    picture: 'pretty_watch.jpg'
  })

  Auctions.insert({
    highestBidder: '',
    item: item
  })
}
