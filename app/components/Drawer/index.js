/**
*
* Drawer
*
*/

import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Drawer( { items, selectItem, itemLabelAttr, itemKey, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div 
      className={styles.item}
      key={item[itemKey]}
      onClick={() => selectItem(item)}
    >
    {item[itemLabelAttr]}
    </div>
  ));
  
  return (
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen})}>
      {itemNodes}
    </div>
  );
}

Drawer.prototypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKey: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired
}

export default Drawer;
