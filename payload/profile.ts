import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Sangwoo Yu',
    // small: '(LI)',
  },
  contact: [
    {
      title: 'k7nsuy2@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://linkedin.com/in/sangwoo-yu',
      link: 'https://linkedin.com/in/sangwoo-yu',
      icon: faLinkedin,
    },
    {
      title: 'https://github.com/k7nsuy',
      link: 'https://github.com/k7nsuy',
      icon: faGithub,
    },
    {
      link: 'https://velog.io/@k7nsuy',
      icon: faBlog,
    },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '',
    icon: undefined,
  },
};

export default profile;
