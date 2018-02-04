/**
*
* SearchComponent
*
*/

import pickBy from "lodash.pickby";
import debounce from "lodash.debounce";
import React, { PureComponent } from 'react'
import styles from "./styles.css";

export default class SearchComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  doSearch = debounce(() => {
    const { title } = this.state;
    const { links, setLinks } = this.props;

    if (title != "") {
      const selLinks = [];

      links.map(link => {
        const pickedList = pickBy(link, value => {
          return value.toLowerCase().match(title.toLowerCase());
        });

        if (Object.keys(pickedList).length !== 0) {
          selLinks.push(link);
        }
      });

      setLinks(selLinks);
    } else {
      setLinks(links);
    }
  }, 300);

  handleChange = title => {
    this.setState({ title }, () => this.doSearch());
  };

  render() {
    return (
      <input
        ref={input => (this.seachInput = input)}
        className={styles.input}
        type="search"
        placeholder="Search projects"
        value={this.state.title}
        onChange={e => this.handleChange(e.target.value)}
      />
    )
  }
}

SearchComponent.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string,
      id: React.PropTypes.string.isRequired
    })
  ),
  setLinks: React.PropTypes.func.isRequired
}