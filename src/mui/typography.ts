import JetBrainsMonoWoff2 from '/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const fontName = 'JetBrains Mono';

export const typography: TypographyOptions = {
  fontFamily: fontName,
  fontSize: 14,
};

export const localFont = `
            @font-face {
              font-family: '${fontName}';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('${fontName}'), local('${fontName}-Regular'), url(${JetBrainsMonoWoff2}) format('woff2');
            }
            `;
