import React from 'react';
import JobSection from './JobSection';
import ResumeData from '../../resume';

const ResumeParent = (props) => {
  return (
    <div className="row">
      <div className="col-md-12 content">
        <JobSection {...ResumeData}/>
      </div>
    </div>
  )
};

export default ResumeParent;