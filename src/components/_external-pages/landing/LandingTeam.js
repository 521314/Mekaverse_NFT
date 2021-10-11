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

export default function LandingTeam() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={8} direction="row" justifyContent="content">
          <Grid item xs={12} md={5} >
            <MotionInView variants={varFadeInUp} >
              <MotionInView variants={varFadeInUp}  className="team_title">
                <Typography variant="h2" sx={{ color:"#848198", fontWeight:600, fontFamily: 'Space Grotesk', textAlign:"right" }}>
                  Who are we?
                </Typography>
              </MotionInView>
              <Typography variant="h2" sx={{ fontWeight:700, fontFamily: 'Space Grotesk', color: '#d02561', textAlign:"right" }}>
                Creative teams
              </Typography>
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={7} className="videoLoop">
            <MotionInView variants={varFadeInUp} color="#848198">
              <Typography variant="h5" fontWeight="300">
                Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
