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
  const wrapper = shallow(<AuctionComponent item={auctionItem}/>);

  it('should by default render with current price = item price, highest bidder empty', function(){
    expect(wrapper.find('#currentPrice').text()).to.equal(PRICE.toString());
    expect(wrapper.find('#highestBidder').text()).to.be.empty;
  });
  it('should render an Item component', function(){
    expect(wrapper.find(ItemComponent)).to.have.length(1);
  });
});
