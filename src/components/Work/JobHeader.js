import React from 'react';
import InlineSeparator from '../InlineSeparator/InlineSeparator';

const JobHeader = (props) => {
  return (
    <ul className="list-inline">
      <li><h4>{props.job}</h4></li>
      <InlineSeparator/>
      <li>{props.employer}</li>
      <InlineSeparator/>
      <li>{props.location}</li>
      <InlineSeparator/>
      <li>{props.when}</li>
    </ul>
  )
};

export default JobHeader;