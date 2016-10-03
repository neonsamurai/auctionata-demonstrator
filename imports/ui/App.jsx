import React, { Component, PropTypes } from 'react';
import AccountsUiComponent from './AccountsUiComponent.jsx'
import AuctionComponent from './AuctionComponent.jsx';
import { Auctions } from '../api/auction/auctionModel.js';
import { Items } from '../api/item/itemModel.js';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
    renderAuction() {
        return <AuctionComponent item={this.props.item} highestBidder={this.props.auction.highestBidder}/>;
    }

    renderLoading() {
        return <div>loading ...</div>;
    }

    render() {
        return (
            <div>
                <h1>Auctionata demonstrator</h1>
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
