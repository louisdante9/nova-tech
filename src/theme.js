import { createTheme } from '@mui/material/styles';

export const darkGray = '#263746';
export const charcoal = '#161E29';
export const brightBlue = '#3A8DD3';
export const green = '#29CC9A';
export const purple = '#5F2BE1';
export const coral = '#E46868';
export const background = '#FFFFFF';
export const darkBackground = '#1E2B38';
export const lightGray = '#A3BCC3';
export const gold = '#FFDA7C';
export const white = '#FFFFFF';

export const matchScoreGradient = `linear-gradient(90deg, ${charcoal} -5%, ${purple} 36%, #00EEE4 98%)`;
export const matchInputGradient = 'linear-gradient(90deg, #504CE0 0%, #318DDE)';

// to be used over a white background
export const skeletonGradient =
    'linear-gradient(110.27deg, rgba(58, 141, 211, 0.08) 8.61%, rgba(58, 141, 211, 0.16) 22.8%, rgba(58, 141, 211, 0.08) 41.93%, rgba(58, 141, 211, 0.16) 69.07%, rgba(58, 141, 211, 0.08) 84.5%, rgba(58, 141, 211, 0.16) 107.32%, rgba(58, 141, 211, 0.08) 127.06%)';


export const theme = createTheme({
    palette: {
        common: {
            charcoal,
            matchScoreGradient,
            matchInputGradient,
            skeletonGradient,
            lightGray,
            gold,
        },
        primary: {
            main: brightBlue,
        },
        secondary: {
            main: purple,
        },
        error: {
            main: coral,
        },
        success: {
            main: green,
        },
        text: {
            primary: white,
            secondary: darkGray
        },
        background: {
            default: background,
        },
    },
    typography: {
        fontFamily: 'sofia-pro, sans-serif',
    },
    mixins: {
        toolbar: {
            '@media (min-width:0px) and (orientation: landscape)': {
                minHeight: 56,
            },
            '@media (min-width:600px)': {
                minHeight: 56,
            },
            minHeight: 56,
        },
    },
});
