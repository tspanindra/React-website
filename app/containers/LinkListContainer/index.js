/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks, startAdd } from './actions';
import { toggleDrawer } from '../NavigationContainer/actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    topicName: React.PropTypes.string.isRequired,
    requestLinks: React.PropTypes.func.isRequired 
  }
  
  onHomeClick = () => {
    if(this.props.isDrawerOpen)
      this.props.toggleDrawer();
  }

  componentWillMount() {
    this.props.requestLinks(this.props.topicName)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.topicName !== this.props.topicName ) {
      this.props.requestLinks(nextProps.topicName) 
    }
  }

  render() {
    return (
      <div onClick={this.onHomeClick}>
        <LinkList {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
    startAdd: (topicName) => dispatch(startAdd(topicName)), 
    toggleDrawer: () => dispatch(toggleDrawer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
