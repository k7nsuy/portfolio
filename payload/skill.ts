import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Nest.js',
      level: 2,
    },
    {
      title: 'Typescript',
      level: 2,
    },
    {
      title: 'Express.js',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const DevOps: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'CI/CD',
      level: 3,
    },
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 2,
    },
    {
      title: 'Ansible',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'AWS RDS',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 1,
    },
    {
      title: 'MariaDB',
      level: 1,
    },
    {
      title: 'OracleDB',
      level: 1,
    },
    {
      title: 'Firebase',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'etc',
  items: [
    {
      title: 'Linux',
      level: 3,
    },
    {
      title: 'Apache & Nginx',
      level: 3,
    },
    {
      title: 'Datadog',
      level: 1,
    },
    {
      title: 'Apache Tomcat',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, DevOps, database, frontend, etc],
  tooltip: '1: Entry Level\n2: Junior Level\n3: Senior Level',
};

export default skill;
