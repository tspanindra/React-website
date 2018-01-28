/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import { Link } from 'react-router';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login"> login </Link>);
  return (
    <div className={styles.appBar}>
      <div 
        className={styles.iconButton}
        onClick={toggleDrawer}
      >
        <FontAwesome 
          className={styles.icon}
          name="bars"
        />
      </div>
      
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