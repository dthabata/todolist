import { ThemeOptions, createTheme } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#CCED5D',
      main: '#726BFA',
      dark: '#586AFA',
    },
    background: {
      paper: '#161527',
      default: '#313151',
    },
  },
});
