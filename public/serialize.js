export const serialize = (obj = {}) => {
    let arr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value !== null) {
                arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
            }
        }
    }
    if (arr.length) {
        return '?' + arr.join('&')
    } else {
        return '';
    }
}