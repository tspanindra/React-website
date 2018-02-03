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
    if(props.links && props.links.length > 0) {
      options.push("Select a project");
      props.links.map(link => { 
        options.push(link.title);
      }); 
    } 
    return options;
  }
  
  const onSelectDropDown = (event) => {
    const selLink = props.links.filter(link => link.title === event.value);
    if(selLink.length > 0) {
      props.setLinks(selLink);
    } else {
      props.setLinks(props.links); 
    }
  }

  const defaultOption = getDropdownOptions()[0];

  return (
    <Dropdown 
      options={getDropdownOptions()} 
      onChange={onSelectDropDown} 
      value= {defaultOption}
      placeholder="Select a project" />
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
  setLinks: React.PropTypes.func.isRequired
};

export default DropDownComponent;
