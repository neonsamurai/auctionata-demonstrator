import React, { Component, PropTypes } from 'react';
import AccountsUiComponent from './AccountsUiComponent.jsx'
import AuctionComponent from './AuctionComponent.jsx';
import { Auctions } from '../api/auction/auctionModel.js';
import { Items } from '../api/item/itemModel.js';
import { createContainer } from 'meteor/react-meteor-data';

/**
 * @module imports/ui/App
 */

/**
 * Root component of the demonstrator. It fetches data from the server.
 */
class App extends Component {
    /**
     * Render the AuctionComponent with the necessary props.
     * @returns {XML}
     */
    renderAuction() {
        return <AuctionComponent {...this.props}/>;
    }

    /**
     * Render a loading notification while data is being fetched.
     * @returns {XML}
     */
    renderLoading() {
        return <div>loading ...</div>;
    }

    /**
     * Handle the onClick event and dispatch the RPC to reset the highest bidder of the auction.
     */
    reset() {
        console.log(this);
        Meteor.call('bid.reset', this.auction, Meteor.userId);
    }

    render() {
        return (
            <div>
                <h1>Auctionata demonstrator</h1>
                <button onClick={this.reset.bind(this.props)}> RESET BID </button>
                <AccountsUiComponent />
                {this.props.loading ? this.renderLoading() : this.renderAuction()}
            </div>
        );
    }
}

App.propTypes = {
    item: PropTypes.object,
    auction: PropTypes.object,
}

/**
 * Wrap the App component in a Meteor data handler to activate reactive updates from the database.
 */
export default createContainer(() => {
    const itemHandle = Meteor.subscribe('item');
    const auctionHandle = Meteor.subscribe('auction');
    return {
        user: Meteor.user(),
        loading: !(itemHandle.ready() && auctionHandle.ready()),
        connected: Meteor.status().connected,
        item: Items.findOne(),
        auction: Auctions.findOne(),
    };
}, App);
