import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

/**
 * @classdesc This is a wrapper for the Accounts-ui widget which is a Blaze template. We
 * wrap it in a React Component so that we can use it as if it was a native
 * React component.
 * @module imports/ui/AccountsUI
 * @class
 */
export default class AccountsUI extends Component {
    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }
    render() {
        // Just render a placeholder container that will be filled in
        return <span ref="container" />;
    }
}
