// Shared by Card and ViewCreator, which both display a creator's link.

// "https://www.youtube.com/@mkbhd/" -> "youtube.com/@mkbhd"
export const prettyUrl = (url) => {
    if (!url) return '';
    return url
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/\/$/, '');
};

// an href without a protocol is treated as a relative path, so add one
export const fullUrl = (url) => (/^https?:\/\//.test(url) ? url : 'https://' + url);
