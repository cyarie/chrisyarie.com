import React from 'react';
import uuid from 'uuid/v4'
import JobHeader from './JobHeader';
import JobDescription from './JobDescription';

const JobSection = (props) => {
  const jobs = props.jobs.map((job) => {
    return (
      <div key={uuid()}>
        <JobHeader key={job.header.employer} {...job.header}/>
        <JobDescription key={uuid()} {...job} />
      </div>
    )
  });

  return (
    <div>
      {jobs}
    </div>
  )
};

export default JobSection;