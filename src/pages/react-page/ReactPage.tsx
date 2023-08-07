import reactLogo from '/icons/react.svg';
import { Typography } from '@mui/material';
import { LogoImg } from '../../App.styled';

export function ReactPage() {
  return (
    <main>
      <Typography variant='h1'>What is React?</Typography>
      <a
        href='https://react.dev'
        target='_blank'
        rel='noreferrer'
      >
        <LogoImg
          src={reactLogo}
          alt='React logo'
        />
      </a>
    </main>
  );
}
