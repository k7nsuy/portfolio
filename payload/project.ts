import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Video Upload Web Application',
      startedAt: 'Jan 2023',
      endedAt: 'May 2023',
      where: 'Side Project',
      descriptions: [
        { content: 'Built a Restful API server using Express.js Framework' },
        { content: 'Created front-end pages using Pug Engine, JavaScript, SCSS, and Webpack' },
        { content: 'Built and linked WEB and DB containers using Docker and docker-compose' },
        { content: 'Automated Docker container build and deployment using AWS Code Series' },
        { content: 'Stored video and image files using AWS S3' },
        { content: 'Provided login service using Github OAuth' },
        { content: 'Mapped server models and DB data using MongoDB and Mongoose ODM library' },
        { content: 'Page : ', postHref: 'https://swyu.tk', weight: 'BOLD' },
      ],
    },
    {
      title: 'Managed Service Provider',
      startedAt: 'Feb 2022',
      endedAt: 'Apr 2023',
      where: 'Bespin Global Tech Center',
      descriptions: [
        {
          content:
            'Built AWS services and handled issues (VPC, EC2, RDS, ELB, Route53, IAM, EKS, ECS, etc.)',
        },
        {
          content:
            'Reduced service build and deployment time by over 70% and developer communication cost by over 30% by implementing CI/CD automation for Node.js and Java service environments',
        },
        {
          content:
            'Provided AWS infrastructure cost savings of 30% by analyzing CPU, Memory, and APM of client servers and suggesting optimal instance types',
        },
        {
          content: 'Handled issues and managed Linux and Windows OS with over 90% resolution rate',
        },
        {
          content:
            'Managed and handled issues for Nginx, Apache, and Tomcat web servers with over 90% resolution rate',
        },
        {
          content:
            'Managed customer servers and MSA system components, collected metrics, and monitored for real-time responses, reducing system issue occurrence by 75%',
        },
        {
          content:
            'Reduced system issue occurrence by 80% through AWS EKS Kubernetes cluster and node updates, service operation management, daily hardware status checks, and AWS issue monitoring',
        },
        { content: 'Installed and linked server and database redundancy' },
        {
          content: 'Migrated client platform services from On-premise to AWS Cloud environment',
        },
        {
          content:
            'Served as internal security manager (PC security and Okta authentication solution management)',
        },
      ],
    },
    {
      title:
        'Cloud Migration Project Vulnerability Analysis and Action for Gyeongsangnam-do Public Office',
      startedAt: 'Mar 2023',
      endedAt: 'Apr 2023',
      where: 'Bespin Global Tech Center',
      descriptions: [
        {
          content:
            'Handled ownership and permissions for users, files, and directories in Linux and Windows environments',
        },
        { content: 'Configured and secured Apache, Nginx, and Tomcat web servers' },
        { content: 'Enhanced user permissions and security for MySQL and MSSQL databases' },
      ],
    },
    {
      title: 'DevOps 3-tier Architecture with CI/CD',
      startedAt: 'Nov 2021',
      endedAt: 'Dec 2021',
      where: 'Bespin Global',
      descriptions: [
        {
          content:
            'Set up Cloud Infra Structure server redundancy and elastic server configurations (Auto Scaling) using Terraform platform and AWS Credential authentication',
        },
        { content: 'Batch updated Apache and Tomcat config settings using Ansible' },
        { content: 'Implemented server build and deployment automation using Jenkins' },
        { content: 'Built container servers using Docker' },
        { content: 'Built and linked RDS database with server redundancy' },
        {
          content:
            'Deployed web applications simultaneously to redundant servers using File System',
        },
        {
          content:
            'Utilized real-time logs with AWS CloudWatch and sent notification messages using AWS SNS',
        },
      ],
    },
    {
      title: 'AWS 3-tier Architecture',
      startedAt: 'Sep 2021',
      endedAt: 'Oct 2021',
      where: 'Bespin Global',
      descriptions: [
        {
          content:
            'Built Nginx and Tomcat web servers, linked them using Reverse Proxy, and ensured server redundancy',
        },
        {
          content:
            'Deployed RDS server redundancy and linked with Tomcat, ensuring transaction validation',
        },
        { content: 'Set up elastic servers with Auto Scaling based on traffic' },
        { content: 'Applied HTTPS to servers using ELB and distributed traffic load' },
        { content: 'Tested and analyzed server performance using JMeter' },
      ],
    },
    {
      title: 'Big Data-based Tourism Web Application Development',
      startedAt: 'Jun 2021',
      endedAt: 'Jul 2021',
      where: 'Busan IT Talent Development Institute',
      descriptions: [
        { content: 'Analyzed and predicted interests using SNS data and public data' },
        {
          content:
            'Collected and stored data using APIs from the Meteorological Agency and tourism public data, analyzed it, and delivered it to users through the web',
        },
        {
          content:
            'Provided information about community festivals or performances of interest to tourists',
        },
        { content: 'Offered information about unique festivals or performances in each region' },
        { content: 'Provided real-time location and weather information using APIs' },
      ],
    },
    {
      title: 'Android and Firebase-based Chat Application',
      startedAt: 'Mar 2021',
      endedAt: 'Apr 2021',
      where: 'Busan IT Talent Development Institute',
      descriptions: [
        { content: 'Implemented real-time chat using Firebase Cloud Messaging' },
        { content: 'Stored data using Cloud Storage' },
        { content: 'Developed Android UI/UX screens using Java' },
        { content: 'Sent user tokens and performed authentication using Firebase Auth' },
      ],
    },
    {
      title: 'Healthcare Product Sales Web Application',
      startedAt: 'Jan 2021',
      endedAt: 'Feb 2021',
      where: 'Busan IT Talent Development Institute',
      descriptions: [
        {
          content:
            'Increased server security and distributed traffic load by separating User and Admin pages',
        },
        { content: 'Designed use cases and table specifications' },
        { content: 'Designed Restful API using Spring Boot framework' },
        { content: 'Implemented sitemap based on design' },
        { content: 'Integrated Backend server with Oracle DB and validated data transactions' },
      ],
    },
  ],
};

export default project;
