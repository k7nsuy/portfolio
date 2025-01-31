import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Busan IT Development Center',
      subTitle:
        'Developed a full-stack web application using React JS, and Java and deployed it with AWS cloud service Provided information on local festivals and events, highlighting unique activities in different regions, and offered real-time location and weather updates through APIs',
      startedAt: 'Dec 2020',
      endedAt: 'Jul 2021',
    },
    {
      title: 'Selc College',
      subTitle: 'Business and English',
      startedAt: 'Aug 2019',
      endedAt: 'Jul 2020',
    },
    {
      title: 'Inje University',
      subTitle: 'B.S. in Mechanical Engineering & English Literature and Language',
      startedAt: 'Mar 2009',
      endedAt: 'Feb 2016',
    },
  ],
};

export default education;
