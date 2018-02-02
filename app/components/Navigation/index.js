/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from '../AppBar';
import Drawer from '../Drawer';
import styles from './styles.css';

function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen, email }) {
  const topicNodes = topics.map(t => (
    <div key={t.name} onClick={() => selectTopic(t)}>
      {t.name}
    </div>
  ));
  // const selectedTopicName = 'About';
  // selectTopic(topics[0]);

  return (
    <div className={styles.navigation}>
    <AppBar toggleDrawer= {toggleDrawer} email={email}/>
    <Drawer
      items = {topics}
      selectItem = {selectTopic}
      itemLabelAttr = "name"
      itemKey = "name"
      isDrawerOpen = {isDrawerOpen}
    />
      {/* {topicNodes} */}
    
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired 
  })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
  email: React.PropTypes.string, 
};

export default Navigation;
