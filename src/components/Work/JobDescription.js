import React from 'react';
import uuid from 'uuid/v4';

const JobDescription = (props) => {
  const descriptions = props.description;
  const jobDescriptions = descriptions.map(job => <li key={uuid()}>{job}</li>);
  return (
    <ul>
      {jobDescriptions}
    </ul>
  )
};

export default JobDescription;