export const RAND_HEX = (digits) => {
    let text = '';
    const possible = 'abcdef0123456789';

    for (let i = 0; i < digits; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const RAND_INT = (max = 100000) => (Math.floor(Math.random() * 90000) + 10000) % max;

export const RAND_STR = () => {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const TRUE_FN = () => true ;
export const FALSE_FN = () => false;
