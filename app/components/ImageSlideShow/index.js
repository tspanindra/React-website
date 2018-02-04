/**
*
* ImageSlideShow
*
*/

import React from 'react';
import SlideShow from '../SlideShow';
import styles from './styles.css';
import pic1 from '../../images/Megs.jpg';
import pic2 from '../../images/Meg2.jpg';
import pic3 from '../../images/Meg3.jpg';

class ImageSlideShow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SlideShow>
        <img src={pic1} className={styles.img} height={200} width={200}/>
        <img src={pic2} className={styles.img} height={200} width={200}/>
        <img src={pic3} className={styles.img} height={200} width={200}/>
      </SlideShow>
    );
  }
}

export default ImageSlideShow;
