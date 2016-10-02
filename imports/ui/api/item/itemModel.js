import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';

export const Items = new Meteor.Collection('items');
export const ItemFactory = Factory.define('item', Items, {
  name: 'Pretty Watch',
  description: 'This is a shiny watch with lots of bling.',
  price: 10 * 1000
});
