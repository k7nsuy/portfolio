// import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview_resume.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME';
const description = 'This is a resume page';

export const _global: IGlobal.Payload = {
  // favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
