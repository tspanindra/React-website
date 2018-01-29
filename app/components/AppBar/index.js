/**
*
* AppBar
*
*/

import React from 'react';
import IconButton from '../IconButton';
import styles from './styles.css';
import { Link } from 'react-router';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login"> login </Link>);
  return (
    <div className={styles.appBar}>
      
      <IconButton
        buttonClass={styles.iconButton}
        iconClass={styles.icon}
        icon="bars"
        onClick={toggleDrawer}
      />
      
      <div 
        className={styles.heading}
      >
      Coder daily
      </div>

      <div 
        className={styles.linkContainer}
        > 
        {loginLink}
      </div>

    </div>
  );
}

AppBar.prototypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string
}

export default AppBar;
