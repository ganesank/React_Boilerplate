import linkedinSvg from '../images/logos/socialMedias/linkedin.svg';
import replitSvg from '../images/logos/socialMedias/replit.svg';
import tinkercadSvg from '../images/logos/socialMedias/tinkercad.svg';
import twitterSvg from '../images/logos/socialMedias/twitter.svg';
import githubSvg from '../images/logos/socialMedias/github.svg';

type SocialMedia = {
    name: string;
    src: string;
    class: string;
    url: string;
};

const socialMedias: SocialMedia[] = [
    {
        name: 'Linkedin',
        src: linkedinSvg,
        class: 'icon__social-media',
        url: 'https://www.linkedin.com/in/roger-takeshita/',
    },
    {
        name: 'GitHub',
        src: githubSvg,
        class: 'icon__social-media',
        url: 'https://github.com/Roger-Takeshita',
    },
    {
        name: 'Repl.it',
        src: replitSvg,
        class: 'icon__social-media',
        url: 'https://repl.it/@rogertakeshita',
    },
    {
        name: 'Twitter',
        src: twitterSvg,
        class: 'icon__social-media',
        url: 'https://twitter.com/RogerTakeshita',
    },
    {
        name: 'TinkerCad',
        src: tinkercadSvg,
        class: 'icon__social-media',
        url: 'https://www.tinkercad.com/users/6isX9On4Qd0-roger-takeshita?category=circuits&sort=likes&view_mode=default',
    },
];

export default socialMedias;
