import viteLogo from '/icons/vite.svg';
import { Typography } from '@mui/material';
import { LogoImg } from '../../App.styled';

export function VitePage() {
  return (
    <main>
      <Typography variant='h1'>What is Vite?</Typography>
      <a
        href='https://react.dev'
        target='_blank'
        rel='noreferrer'
      >
        <LogoImg
          src={viteLogo}
          alt='Vite logo'
        />
      </a>
    </main>
  );
}
