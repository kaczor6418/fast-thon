import React from 'react';

export const enum ThemeMode {
  Dark = 'Dark',
  Light = 'Light',
}

export interface CustomThemeProviderProps {
  children: React.ReactElement;
}
