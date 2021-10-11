// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, Stack } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import VideoPlayer from 'react-videoplayer'
import 'react-videoplayer/lib/index.css'
import VideoLooper from 'react-video-looper'
import { textAlign } from '@material-ui/system';

import testIcon from'@material-ui/icons/Twitter'

// React-vertical-tileline-component 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

export default function LandingRoadmap() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="content">
          <Grid item xs={12} md={8}>
            <MotionInView variants={varFadeInUp}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight:600, fontFamily: 'Space Grotesk', color: 'white', textAlign:'center'}}>
                Roadmap
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp} color="#848198">
              <Typography variant="h4" fontWeight="400" sx={{mb: 5, textAlign:'center'}}>
                This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!
              </Typography>
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={8}>
            <MotionInView variants={varFadeInUp}>
              <VerticalTimeline
                animate={true}
                layout={'1-column-left'}
                >
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#d02560', color: '#fff' }}
                  icon={<testIcon />}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <p className="roadmap_index">.01</p>
                    <h2 className="vertical-timeline-element-title" style={{marginTop: 15, color: 'white'}}>Launch Roadmap</h2>
                  </Stack>
                  <p style={{color: "#848198"}}>
                    Quality comes first. The goal is to make our first drop as cool as possible so we can have freedom to develop the universe. We're still working on a number of rarity criteria, as well as a lot of new Lore concepts. The drop release date will be announced as soon as the project's quality and technical aspects are fully progressed. We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#d02560', color: '#fff' }}
                  icon={<testIcon />}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <p className="roadmap_index">.02</p>
                    <h2 className="vertical-timeline-element-title" style={{marginTop: 15, color: 'white'}}>Physical Part</h2>
                  </Stack>
                  <p style={{color: "#848198"}}>
                    Mekas have a huge potential as physical creations. We are passionate about 3D printing and want to bring our concept to life with high-quality materials. After several talks with famous art toys makers, we are currently working on some concepts but wait, let’s keep a little mystery for the moment! We also aim to create clothing and merchandise using high-quality materials and textiles with eco-friendly fabrics. Also, Matt. B would love to explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design principles, we will do everything possible to create something amazing before, during, and after the launch of the first Drop!
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#d02560', color: '#fff' }}
                  icon={<testIcon />}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <p className="roadmap_index">.03</p>
                    <h2 className="vertical-timeline-element-title" style={{marginTop: 15, color: 'white'}}>MekaVerse x Artists</h2>
                  </Stack>
                  <p style={{color: "#848198"}}>
                    We know a lot of artists in the NFT community and beyond! We'd like to develop a series in which each Meka is made in collaboration with artists we like and under their artistic direction. We would create a small collection of 1/1 unique Mekas by artists, with all proceeds going to them! This collection is incredibly important to us, and we are excited to see what we can accomplish together!
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#d02560', color: '#fff' }}
                  icon={<testIcon />}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <p className="roadmap_index">.04</p>
                    <h2 className="vertical-timeline-element-title" style={{marginTop: 15, color: 'white'}}>LMeka Multiverse</h2>
                  </Stack>
                  <p style={{color: "#848198"}}>
                    After presenting our original Mekas, we want to explore more abstract subjects in order to present a second, very distinct drop. Our aim is simply to aesthetically enlarge the universe, and each relationship between the Meka Dimensions will be described and explained. We truly want to blend artistic disciplines, as well as move beyond our graphic style and look outside our comfort zone. We also want to see if it would be possible to collaborate with famous mecha licenses on future releases. That would be incredible!
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: '#d02560', color: '#fff' }}
                  icon={<testIcon />}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <p className="roadmap_index">.05</p>
                    <h2 className="vertical-timeline-element-title" style={{marginTop: 15, color: 'white'}}>Future of Mekas</h2>
                  </Stack>
                  <p style={{color: "#848198"}}>
                    When all of these stages are completed, we’ll take care of maintaining the Meka Universe. We both come from the design industry, and we are truly passionate about Art, Short films, Physical and Digital Exploration, and we would like to explore even more, with the desire to always make events more impressive and ambitious. We are counting on your support! We look forward to seeing what happens in the future! Love from Mekas ♥
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={4} className="videoLoop">
            <VideoLooper
              source="/images/roadmap/helmet.mp4"
              autoplay={true}
              loop
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
