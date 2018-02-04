import React, { PureComponent, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles.css';

class SlideShow extends PureComponent {
  state = {
    total: 0,
    current: 0,
  }

  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    this.interval = setInterval(this.showNext, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNext = () => {
    const { total, current } = this.state;
    this.setState({
      current: current + 1 === total? 0 : current + 1
    });
  };

  render() {
    const { children } = this.props;
    const bullets = Array(this.state.total).fill("○");
    bullets[this.state.current] = "●";
    return (
      <div>
      <div className={styles.slideshow}>
        {/*<ReactCSSTransitionGroup
          className="group"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        > */}
          {Children.toArray(children)[this.state.current]}
       {/* </ReactCSSTransitionGroup> */}
        </div>
        <div className={styles.bullets}>{bullets}</div>
      </div>
    )
  }
}

export default SlideShow;