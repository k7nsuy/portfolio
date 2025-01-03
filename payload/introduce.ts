import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Versatile Software Engineer with 3 years of experience in developing full-stack applications using Typescript, React.js, Node.js and expertise in DevOps. Skilled in developing and maintaining complex software through collaboration with various teams with strong communication skills.',
    ' An analytical problem-solver committed to delivering clean code and demonstrating flexibility in dynamic environments. Actively contributes to the product and promotes team growth.',
  ],
  sign: 'Sangwoo Yu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
