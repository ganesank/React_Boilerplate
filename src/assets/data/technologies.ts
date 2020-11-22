import javascriptSvg from '../../assets/images/logos/languages/javascript.svg';
import typescriptSvg from '../../assets/images/logos/languages/typescript.svg';
import reactSvg from '../../assets/images/logos/languages/react.svg';
import reduxSvg from '../../assets/images/logos/languages/redux.svg';
import htmlSvg from '../../assets/images/logos/languages/html.svg';
import sassSvg from '../../assets/images/logos/languages/sass.svg';
import cssSvg from '../../assets/images/logos/languages/css.svg';

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
        name: 'GitHub',
        src: typescriptSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'Repl.it',
        src: reactSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'Twitter',
        src: reduxSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'TinkerCad',
        src: htmlSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'TinkerCad',
        src: sassSvg,
        class: 'icon icon__technology',
    },
    {
        name: 'TinkerCad',
        src: cssSvg,
        class: 'icon icon__technology',
    },
];

export default socialMedias;
