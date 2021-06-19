import javascriptSvg from '../images/logos/languages/javascript.svg';
import typescriptSvg from '../images/logos/languages/typescript.svg';
import reactSvg from '../images/logos/languages/react.svg';
import reduxSvg from '../images/logos/languages/redux.svg';
import htmlSvg from '../images/logos/languages/html.svg';
import sassSvg from '../images/logos/languages/sass.svg';
import cssSvg from '../images/logos/languages/css.svg';

type Technologies = {
    name: string;
    src: string;
    class: string;
};

const socialMedias: Technologies[] = [
    {
        name: 'JavaScript',
        src: javascriptSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'TypeScript',
        src: typescriptSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'React.js',
        src: reactSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'Redux',
        src: reduxSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'HTML5',
        src: htmlSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'SASS',
        src: sassSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'CSS3',
        src: cssSvg,
        class: 'icon icon__technology',
    },
];

export default socialMedias;
