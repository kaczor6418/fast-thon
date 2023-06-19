import { ThemeProvider, createTheme, useMediaQuery, CssBaseline } from '@mui/material';
import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { breakpoints } from './breakpoints';
import { CustomThemeProviderProps, ThemeMode } from './mui.types';
import { getColorPalette } from './palette';
import { spacing } from './spacing';
import { localFont, typography } from './typography';
import { ReactContextError } from '../errors/ReactContextError';
import { isNullOrUndefined } from '../common/utils/isNullOrUndefined';

const CustomThemeContext = createContext([] as unknown as [ThemeMode, Dispatch<SetStateAction<ThemeMode>>]);

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light);
  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: breakpoints,
        palette: getColorPalette(themeMode),
        spacing: spacing,
        typography: typography,
        components: {
          MuiCssBaseline: {
            styleOverrides: `:root { width: 100%; } ${localFont}}`,
          },
        },
      }),
    [themeMode]
  );

  return (
    <CustomThemeContext.Provider value={[themeMode, setThemeMode]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(CustomThemeContext);
  if (isNullOrUndefined(context)) {
    throw new ReactContextError(`Can't use ${useThemeMode.name} outside ${CustomThemeProvider.name}`);
  }
  return context;
}
