import React from 'react';
import InlineSeparator from '../InlineSeparator/InlineSeparator';

const Skills = (props) => {
  const languages = props.languages.map(language => {
    return (
      <li key={language}>
        {language}
        <InlineSeparator/>
      </li>
    );
  });

  const frameworks = props.frameworks.map(framework => {
    return (
      <li key={framework}>
        {framework}
        <InlineSeparator/>
      </li>
    )
  });

  const technologies = props.technologies.map(tech => {
    return (
      <li key={tech}>
        {tech}
        <InlineSeparator/>
      </li>
    );
  });

  return (
    <div>
      <p>Especially with these languages...</p>
      <ul className="list-inline">
        {languages}
      </ul>
      <p>...these frameworks and libraries...</p>
      <ul className="list-inline">
        {frameworks}
      </ul>
      <p>...and these broad technologies</p>
      <ul className="list-inline">
        {technologies}
      </ul>
      <br />
      <p>I also have previous experience in technology consulting for large political organizations with complex needs.</p>
      <br />
      <br />
      <p><a href="mailto:cyarie@gmail.com">Send me an email</a>, tell me what your problem is, and we can work together on a solution.</p>
    </div>
  );
};

export default Skills;