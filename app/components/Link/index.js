/**
*
* Link
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Link({ link, showFlashCard }) {
  return (
    <div className={classNames(styles.link, { [styles.flashCard]: showFlashCard} )}>
      <div className={styles.detailsContainer}>
        <div className={styles.title}>
          {link.title}
        </div>

        <div className={styles.description}>
          {link.description}
        </div>

        <div>
          <a href={link.url} className={styles.linkAnchor}> {link.url} </a>
        </div>
        
      </div>
    </div>
  );
}

Link.prototype = {
  link: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired, 
    url: React.PropTypes.string,
    id: React.PropTypes.string.isRequired 
  }),
  showFlashCard: React.PropTypes.bool
};
export default Link;
