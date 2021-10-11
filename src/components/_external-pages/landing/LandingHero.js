import { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../../../layouts/main/MainNavbar'
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField } from '@material-ui/core';
import { DatePicker, StaticDatePicker, MobileDatePicker, DesktopDatePicker, DesktopTimePicker } from '@material-ui/lab';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  background: 'url(/images/hero/hero_ipad.jpg)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(30),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const [age, setAge] = useState('');
  const [value, setValue] = useState(new Date());
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        {/* <HeroOverlayStyle alt="hero" src="/images/hero-bg.png" variants={varFadeIn} /> */}

        <Container maxWidth="lg">
          <Header />

          <ContentStyle>
            <motion.div variants={varFadeInRight} style={{
              margin: 'auto',
            }}>
              <Button variant="contained" disable >Raffile registration opens in:</Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
