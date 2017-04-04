import React from 'react';
import Skills from './Skills';
import ResumeData from '../../resume';

const WorkWithMe = () => {
  return (
    <div className="row">
      <div className="col-md-12 content">
        <div className="inline-header">
          <h4>I have extensive professional and personal experience</h4><p> building well-designed technology...</p>
        </div>
        <br />
        <Skills {...ResumeData.skills}/>
      </div>
    </div>
  );
};

export default WorkWithMe;