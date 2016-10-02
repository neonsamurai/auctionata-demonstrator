import { expect } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import AuctionComponent from './AuctionComponent.jsx';

describe('Auction component', function(){
  it('should by default render with current price = item price, highest bidder empty', function(){
    const PRICE = 100;
    const auction = Factory.build('auction',{price: PRICE});
    const item = shallow(<AuctionComponent auction={item} />);
    expect(item.find('#currentPrice').text).to.equal(PRICE);
    expect(item.find('#highestBidder').text).to.be.empty;
  });
});
