import React from 'react';
import PropTypes from 'prop-types';

export default class SlotProvider extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static defaultProps = {

    };

    render() {
        return this.props.children;
    }
}