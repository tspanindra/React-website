/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';
import styles from './styles.css';
import IconButton from '../IconButton';
import TextInput from '../TextInput';
import pickBy from 'lodash.pickby';
import debounce from 'lodash.debounce';

class LinkList extends React.Component {
  constructor() {
    super();
    this.state = {
      title : '',
      links: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.links) {
      this.setState({ links: nextProps.links } )
    }
  }

  doSearch = debounce(() => {
    const { title } = this.state;
    const { links } = this.props;

    if(title != '') {
      const selLinks = [];

      links.map(link => {
        const pickedList = pickBy(link, (value) => {
          return value.toLowerCase().match(title.toLowerCase());
        });

        if(Object.keys(pickedList).length !== 0) {
          selLinks.push(link);
        }
      });
      
      if(selLinks.length > 0) {
        this.setState({links: selLinks});
      }
    } else {
      this.setState({links: this.props.links});
    }
    
  }, 300);
  
  handleChange = (title) => {
		this.setState({title}, () => this.doSearch());
	};

  linkNodes = () => {
    const { links } = this.state;
    return links ? links.map( l => (
      <Link 
        key={l.id}
        link={l}
      /> 
    )): null;
  }

  render() {
    const { topicName, children, startAdd } = this.props;
    return (
      <div className={styles.linkList}>
        <h1> {topicName} </h1>
        
        { topicName === 'Projects' && <input
          ref ={(input) => this.seachInput = input}
          type="search"
          placeholder="Enter search term"
          value={this.state.title}
          onChange={e => this.handleChange(e.target.value)}
        /> } 

        {this.linkNodes()}
        
        <IconButton 
          icon="plus"
          buttonClass={styles.button}
          iconClass= {styles.icon}
          onClick={() => startAdd(topicName)} />

        {children}

    </div>
    )
  }
}

LinkList.propTypes = {
  topicName: React.PropTypes.string.isRequired, 
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired 
  })),
  children:React.PropTypes.element,
  startAdd:React.PropTypes.func.isRequired 
}

export default LinkList;
