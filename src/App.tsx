import reactLogo from '/icons/react.svg';
import viteLogo from '/icons/vite.svg';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import { Link } from '@tanstack/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CounterWrapper, LogoImg } from './App.styled';

export function App() {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <Grid
      width='100%'
      height='100vh'
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
    >
      <Grid item>
        <div>
          <Link to='/about-vite'>
            <LogoImg
              src={viteLogo}
              alt='Vite logo'
            />
          </Link>
          <Link to='/about-react'>
            <LogoImg
              src={reactLogo}
              alt='React logo'
            />
          </Link>
        </div>
      </Grid>
      <Grid item>
        <Typography
          variant='h1'
          align='center'
        >
          {t('app.title')}
        </Typography>
      </Grid>
      <Grid item>
        <CounterWrapper>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setCount((oldCount) => oldCount + 1)}
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </CounterWrapper>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            color: theme.palette.text.disabled,
          }}
        >
          Click on the Vite and React logos to learn more
        </Typography>
      </Grid>
    </Grid>
  );
}
