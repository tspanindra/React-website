/**
 *
 * LinkList
 *
 */

import React from "react";
import Link from "../Link";
import styles from "./styles.css";
import IconButton from "../IconButton";
import DropDownComponent from '../DropDownComponent';
import SearchComponent from '../SearchComponent';

class LinkList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      links: null
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.links) {
      this.setState({ links: nextProps.links });
    }
  }

  setLinks = (links) => {
    this.setState({links});
  }

  linkNodes = () => {
    const { links } = this.state;
    return links ? links.map(l => <Link key={l.id} link={l} showFlashCard={l.showFlashCard} />) : null;
  };

  render() {
    const { topicName, children, startAdd } = this.props;

    return (
      <div className={styles.linkList}>
        <h1> {topicName} </h1>
        
        {topicName === "Projects" && (
          <div>
            <DropDownComponent 
              links={this.props.links}
              setLinks={this.setLinks}/>

            <SearchComponent
              links={this.props.links}
              setLinks={this.setLinks}/>
          </div>
        )}

        {this.linkNodes()}

        <IconButton
          icon="plus"
          buttonClass={styles.button}
          iconClass={styles.icon}
          onClick={() => startAdd(topicName)}
        />

        {children}
      </div>
    );
  }
}

LinkList.propTypes = {
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string,
      id: React.PropTypes.string.isRequired
    })
  ),
  children: React.PropTypes.element,
  startAdd: React.PropTypes.func.isRequired
};

export default LinkList;
