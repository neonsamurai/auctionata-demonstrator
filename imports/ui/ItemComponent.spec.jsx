import { expect } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import ItemComponent from './ItemComponent.jsx';
import Items from '../api/item/itemModel.js';

Factory.define('item', Items, {
    name: 'Pretty Watch',
    description: 'This is a shiny watch with lots of bling.',
    price: 10 * 1000,
    picture: 'pretty_watch.jpg'
});

describe('Item component', function(){
    const PRICE = 100;
    const auctionItem = Factory.build('item',{price: PRICE});
    const wrapper = shallow(<ItemComponent {...auctionItem}/>);
    const url = () => '/public/pictures/' + auctionItem.picture;
    it('should render with its props', function(){
        expect(wrapper.find('#item-name').text()).to.contain(auctionItem.name);
        expect(wrapper.find('#item-description').text()).to.contain(auctionItem.description);
        expect(wrapper.find('#item-price').text()).to.contain(auctionItem.price);
        console.log(wrapper.find('#item-picture'));
        console.log(wrapper.find('#item-picture').props().src);
        expect(wrapper.find('#item-picture').props().src).to.contain(auctionItem.picture);
    })
})
