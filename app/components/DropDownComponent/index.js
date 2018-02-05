/**
*
* DropDownComponent
*
*/

import React from 'react';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropDownComponent = (props) => {
  const getDropdownOptions = () => {
    const options = [];
    if(props.showCategory) {
      options.push("Select Category");
    } else {
      options.push("Select Project"); 
    }

    if(props.links && props.links.length > 0) {
      props.links.map(link => {
        if(props.showCategory && link.category) {
          options.push(link.category);
        } else {
          options.push(link.title);
        }
      }); 
    } 
    return options;
  }
  
  const onSelectDropDown = (event) => {
    const selLink = props.links.filter(link => {
      if(props.showCategory && link.category) {
        return link.category === event.value;
      } else {
        return link.title === event.value 
      }
    })
    if(selLink.length > 0) {
      props.setLinks(selLink);
    } else {
      props.setLinks(props.links); 
    }
  }
  return (
    <Dropdown 
      options={getDropdownOptions()} 
      onChange={onSelectDropDown} 
      value= {getDropdownOptions()[0]}
      placeholder={props.placeholder} />
  );
}

DropDownComponent.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string,
      id: React.PropTypes.string.isRequired
    })
  ),
  setLinks: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  showCategory: React.PropTypes.bool 
};

export default DropDownComponent;
