import * as Type from '../../@types/types';

export const cssColor: Type.CssColorFn = (value, css = '') => {
    switch (true) {
        case value < 0:
            return `color-0-less-percent${css ? ` ${css}` : ''}`;
        case value === 0:
            return `color-0-percent${css ? ` ${css}` : ''}`;
        case value <= 10:
            return `color-10-percent${css ? ` ${css}` : ''}`;
        case value <= 20:
            return `color-20-percent${css ? ` ${css}` : ''}`;
        case value <= 30:
            return `color-30-percent${css ? ` ${css}` : ''}`;
        case value <= 40:
            return `color-40-percent${css ? ` ${css}` : ''}`;
        case value <= 50:
            return `color-50-percent${css ? ` ${css}` : ''}`;
        case value <= 60:
            return `color-60-percent${css ? ` ${css}` : ''}`;
        case value <= 70:
            return `color-70-percent${css ? ` ${css}` : ''}`;
        case value <= 80:
            return `color-80-percent${css ? ` ${css}` : ''}`;
        case value <= 90:
            return `color-90-percent${css ? ` ${css}` : ''}`;
        case value <= 100:
            return `color-100-percent${css ? ` ${css}` : ''}`;
        case value >= 100:
            return `color-100-plus-percent${css ? ` ${css}` : ''}`;
    }

    return css;
};

export const delay: Type.DelayFn = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
