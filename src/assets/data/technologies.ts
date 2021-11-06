import htmlSvg from '../images/logos/languages/html.svg';
import reactSvg from '../images/logos/languages/react.svg';
import reduxSvg from '../images/logos/languages/redux.svg';
import sassSvg from '../images/logos/languages/sass.svg';
import typescriptSvg from '../images/logos/languages/typescript.svg';

type Technologies = {
    name: string;
    src: string;
    class: string;
};

const socialMedias: Technologies[] = [
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
        name: 'TypeScript',
        src: typescriptSvg,
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
];

export default socialMedias;
