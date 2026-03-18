
const size = {
    mobile: '390px',
    tablet: '600px',
    laptop: '1150px',
}

export const devices = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
};