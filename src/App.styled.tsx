import { keyframes, styled } from '@mui/material';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const LogoImg = styled('img')(({ theme }) => ({
  height: '5rem',
  padding: theme.spacing(1.5),
  willChange: 'filter',
  transition: theme.transitions.create('filter', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.short,
  }),
  animation: `${logoSpin} infinite 20s linear`,
  '&:hover': {
    filter: `drop-shadow(0 0 2rem ${theme.palette.secondary.main})`,
  },
}));

export const CounterWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));
