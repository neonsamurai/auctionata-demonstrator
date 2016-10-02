import { expect } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import AuctionComponent from './AuctionComponent.jsx';
import ItemComponent from './ItemComponent.jsx';
import Items from '../api/item/itemModel.js';

Factory.define('item', Items, {
  name: 'Pretty Watch',
  description: 'This is a shiny watch with lots of bling.',
  price: 10 * 1000
});

describe('Auction component', function(){
  const PRICE = 100;
  const auctionItem = Factory.build('item',{price: PRICE});
  const item = shallow(<AuctionComponent item={auctionItem}/>);

  it('should by default render with current price = item price, highest bidder empty', function(){



    expect(item.find('#currentPrice').text()).to.equal(PRICE.toString());
    expect(item.find('#highestBidder').text()).to.be.empty;
  });
  it('should render an Item component', function(){
    expect(item.find(ItemComponent).length).to.equal(1);
  });
});
