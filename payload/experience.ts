import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Outlier AI',
      position: 'AI Trainer (freelancer)',
      startedAt: 'Nov 2024',
      endedAt: '',
      descriptions: [
        'Created and refined ground-truth datasets for training large language models, while writing efficient, functional code across multiple programming languages',
        'Leveraged strong software engineering expertise in rapidly evolving environments, providing actionable feedback and driving continuous improvement across processes',
        'Analyzed data flow to identify bottlenecks and implemented solutions to maintain optimal throughput, contributing to the successful delivery of AI-driven initiatives',
      ],
      skillKeywords: [
        'Python',
        'JavaScript',
        'Node.js',
        'Critical Thinking',
        'Creative Writing Skill',
      ],
    },
    {
      title: 'Ninehire',
      position: 'Software Engineer',
      startedAt: 'Aug 2023',
      endedAt: 'Sep 2024',
      descriptions: [
        'Transitioned to a backend developer role, successfully managing backend development tasks for the recruiting web service',
        'Developed REST APIs, created new backend pages, and managed servers using Typescript and Nest.js',
        'Optimized database queries and schemas to integrate with new backend functionalities',
        'Managed and executed data migration from external services to Ninehire',
        'Conducted QA testing to identify and resolve bugs, suggested UI improvements, and tested UI as part of the deployment process through manual testing and cross-device compatibility checks',
      ],
      skillKeywords: [
        'JavaScript',
        'Typescript',
        'Nest.js',
        'AWS',
        'Docker',
        'React.js',
        'MySQL',
        'Python',
      ],
    },
    {
      title: 'Bespin Global',
      position: 'DevOps Engineer',
      startedAt: 'Jul 2021',
      endedAt: 'Jun 2023',
      descriptions: [
        'Managed infrastructure leveraging a range of AWS services including EC2, ELB, RDS, IAM, ECS, CDN, and Route53',
        'Improved system availability by addressing server incidents and optimizing performance',
        'Implemented CI/CD automation for Node.js and Java environments, reducing build and deployment times by over 70% and cutting developer communication costs by more than 20%',
        'Reduced system failures by 80% through updating AWS EKS Kubernetes clusters and nodes, managing service operations, resolving issues, conducting daily hardware status checks, and monitoring AWS issues',
        'Developed solutions for optimizing instance types based on CPU, memory, and APM analysis, reducing AWS infrastructure costs by 30%',
      ],
      skillKeywords: [
        'AWS',
        'GCP',
        'Azure',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Terraform',
        'Ansible',
        'Node.js',
        'Apache',
        'Nginx',
        'Tomcat',
      ],
    },
  ],
};

export default experience;
