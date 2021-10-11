// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, Stack } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import VideoPlayer from 'react-videoplayer'
import 'react-videoplayer/lib/index.css'
import VideoLooper from 'react-video-looper'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0, 24, 0),
  // background: 'url(/images/about-bg.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={8} direction="row" justifyContent="content">
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp}>
              <Typography variant="h2" sx={{ fontWeight:700, fontFamily: 'Space Grotesk', color: '#d02561' }}>
                8,888 unique Mekas
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight:600, fontFamily: 'Space Grotesk', color: 'white' }}>
                who need Drivers.
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp} color="#848198">
              <Typography variant="h4" fontWeight="400" sx={{mb: 5}}>
                The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.
              </Typography>

              <Typography variant="h4" fontWeight="400">
                Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.
              </Typography>
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={6} className="videoLoop">
            {/* <VideoPlayer
              videoSrc="/images/presentation/various.mp4"
              autoplay={true}
              playing={true}
              loop={true}
              controls={false}
            /> */}
            <VideoLooper
              source="/images/presentation/various.mp4"
              autoplay={true}
              loop
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
