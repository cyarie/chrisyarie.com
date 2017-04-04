import React from 'react';
import './AboutMe.scss';

const About = () => {
  return (
    <div className="row">
      <div className="col-md-12 content">
        <div className="inline-header">
          <h4>I am a full-stack software developer </h4><p>working at a GV-backed startup in Bethesda, MD.</p>
        </div>
        <br />
        <p>I am also a giant baseball geek, and this <a href="https://mlb.cyarie.com/api/v1/player">MLB Gameday Data API</a> is my work-in-progress nerd-passion.</p>
        <br />
        <br />
        <p>Previous work includes doing full-stack development for the Democratic National Committee, where I...</p>
        <br />
        <ul>
          <li>Built software for using Twitter to track instances of voter suppression and polling-place issues</li>
          <li>Collaborated to design and build an application that enabled over 80,000 voters in Florida to request vote-by-mail ballots via email</li>
          <li>Completely re-engineered the DNC Digital Team's analytics application</li>
        </ul>
        <p>I am comfortable working up and down the entire stack -- starting from the front-end, and working all the way down to infrastructure planning.</p>
        <br />
        <br />
        <p>I am available for political and other non-health care technology consulting.</p>
      </div>
    </div>
  )
};

export default About;