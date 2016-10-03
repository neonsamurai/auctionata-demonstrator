import React, { Component } from 'react';
import AccountsUiComponent from './AccountsUiComponent.jsx'
import AuctionComponent from './AuctionComponent.jsx';
import { Auctions } from '../api/auction/auctionModel.js';
import { Items } from '../api/item/itemModel.js';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
    const item = Items.findOne();
    const auction = Auctions.findOne();

    renderAuction = () => <AuctionComponent item={this.props.item} highestBidder={this.props.auction.highestBidder}/>;
    renderLoginNotification = () => <div>Please login ...</div>;

    render() {
        return (
            <div>
                <h1>Auctionata demonstrator</h1>
                <AccountsUiComponent />
                {Meteor.userId() ? renderAuction() : renderLoginNotification()}
            </div>
        );
    }
}

App.propTypes = {
    item: PropTypes.object.isRequired,
    auction: PropTypes.object.isRequired,
}

export default createContainer(() => {
    return {
        item: Item.findOne(),
        auction: Auctions.findOne(),
    };
}, App);
