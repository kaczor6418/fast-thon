import { blue, green, lightBlue, orange, purple, red } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { ThemeMode } from './mui.types';

const lightThemePalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: blue[700],
    light: blue[400],
    dark: blue[800],
  },
  secondary: {
    main: purple[500],
    light: purple[300],
    dark: purple[700],
  },
  error: {
    main: red[700],
    light: red[400],
    dark: red[800],
  },
  info: {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900],
  },
  success: {
    main: green[800],
    light: green[500],
    dark: green[900],
  },
  warning: {
    main: '#ed6c02',
    light: orange[500],
    dark: orange[900],
  },
  background: {
    paper: '#ffffff',
    default: '#ffffff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  action: {
    // The color of an active action like an icon button
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of a hovered action
    hover: 'rgba(0, 0, 0, 0.04)',
    // The color of a selected action
    selected: 'rgba(0, 0, 0, 0.08)',
    // The color of a disabled action
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};
const darkThemePalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: blue[200],
    light: blue[50],
    dark: blue[400],
  },
  secondary: {
    main: purple[200],
    light: purple[50],
    dark: purple[400],
  },
  error: {
    main: red[500],
    light: red[300],
    dark: red[700],
  },
  info: {
    main: lightBlue[400],
    light: lightBlue[300],
    dark: lightBlue[700],
  },
  success: {
    main: green[400],
    light: green[300],
    dark: green[700],
  },
  warning: {
    main: orange[400],
    light: orange[300],
    dark: orange[700],
  },
  background: {
    paper: '#121212',
    default: '#121212',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    // The color of an active action like an icon button
    active: '#ffffff',
    // The color of a hovered action
    hover: 'rgba(255, 255, 255, 0.08)',
    // The color of a selected action
    selected: 'rgba(255, 255, 255, 0.16)',
    // The color of a disabled action
    disabled: 'rgba(255, 255, 255, 0.3)',
    // The background color of a disabled action
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};

export function getColorPalette(mode: ThemeMode) {
  return mode === ThemeMode.Light ? lightThemePalette : darkThemePalette;
}
