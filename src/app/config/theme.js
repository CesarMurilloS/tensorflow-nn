import { lightBlue, blueGrey } from '@material-ui/core/colors';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
    palette: {
      type: "light",
      primary: {
        light: lightBlue['700'],
        main: lightBlue['800'],
        dark: lightBlue['900'],
        contrastText: '#fff',
      },
      secondary: {
        light: blueGrey['600'],
        main: blueGrey['700'],
        dark: blueGrey['800'],
        contrastText: '#fff',
      },
      text: {
        primary: '#1d1d1f',
      }
    },
});

theme = responsiveFontSizes(theme);

/**
 * References: 
 * 1. Material UI Theme Override and Props in React JS 
 *    https://www.youtube.com/watch?v=mu8-u7V7Z8s
 * 2. Customize Material UI Theme 
 *    https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * 3. https://snappywebdesign.net/blog/how-to-code-a-dark-theme-with-material-ui/
 */

export default theme;