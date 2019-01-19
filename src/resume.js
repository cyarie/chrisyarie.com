const ResumeData = {
  jobs: [
    {
      header: {
        employer: 'Aledade, Inc.',
        job: 'Senior Software Engineer',
        location: 'Bethesda, MD',
        when: 'September 2018 - Present',
        description: [
          `Along with a cross-functional team of designers, project managers, other engineers, and stakeholders,
           I worked as the lead UI/UX engineer to develop a strategic planning tool used by all of
           Aledade's 19 -- and growing -- ACOs to make prioritization decisions around how to best achieve savings.`
        ]
      }
    },
    {
      header: {
        employer: 'Aledade, Inc.',
        job: 'Software Developer',
        location: 'Bethesda, MD',
        when: 'September 2016 - September 2018'
      },
      description: [
        `Designed and implemented much of the Aledade app’s new front-end assets build system, which resulted 
         in shrinking the size of deliverable assets by over one megabyte and cut the total number of asset requests 
         in half`,
        `Managed a team of developers to implement a real-time SMS and email alerts system which notifies clinicians 
         and other office staff when a patient is admitted and/or discharged from a hospital setting; also designed and 
         implemented the back-end details of the system, which generates over 500 alerts a day`
      ]
    },
    {
      header: {
        employer: 'Democratic National Committee',
        job: 'Data Engineer',
        location: 'Washington, DC',
        when: 'January 2015 - September 2016'
      },
      description: [
        `Designed and built an AWS Kinesis- and Pusher-based application for fast processing and monitoring of 
         streaming Twitter data during high priority events (ie: elections and debates); at peak, processes 
         nearly 60 tweets per second for usage in a React and Redux-based front-end application`,
        `Designed and built a Scala Play- and PostgreSQL-based on-demand record-linkage system capable of 
         generating likely matches against 180 million candidates in under 3 seconds for purposes for voter 
         registration lookups`
      ]
    },
    {
      header: {
        employer: 'Democratic National Committee',
        job: 'Digital Production Assistant',
        location: 'Washington, DC',
        when: 'May 2014 - January 2015'
      },
      description: []
    },
    {
      header: {
        employer: 'United States Peace Corps',
        job: 'University English Teacher',
        location: 'Chengdu, Sichuan, China',
        when: 'June 2013 - May 2014'
      },
      description: []
    }
  ],
  skills: {
    languages: [
      'Python',
      'Javascript',
      'HTML',
      'CSS',
      'Golang',
      'SQL'
    ],
    frameworks: [
      'Django',
      'Flask',
      'AngularJS',
      'React',
      'Redux'
    ],
    technologies: [
      'AWS',
      'Ansible',
      'Linux',
      'Git',
      'PostgreSQL'
    ]
  }
};

export default ResumeData;