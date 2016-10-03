import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import '../imports/api/auction/auctionMethods.js';
import App from '../imports/ui/App.jsx';

/**
 * @module client/main
 *
 * Assembles all the necessary imports to start up the frontend. This includes the root component as well as registering
 * Meteor methods from the api packages.
 */

/**
 * Kick off React.
 */
Meteor.startup(() => {
  render(<App />, document.getElementById('root-node'));
});
