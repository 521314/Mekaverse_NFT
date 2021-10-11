// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingHowWork,
  LandingRoadmap,
  LandingEquipment,
  LandingAbout,
  LandingTeam,
  LandingCategory,
  LandingDamage,
  LandingConnect
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: "black"
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        {/* presentation */}
        <LandingAbout />
        {/* Gallery */}
        <LandingCategory />
        {/* Roadmap */}
        <LandingRoadmap />
        {/* presentation */}
        <LandingTeam />


        {/* <LandingHowWork /> */}
        <LandingEquipment />
        {/* Join the community */}
        <LandingDamage />
        {/* <LandingConnect /> */}
      </ContentStyle>
    </RootStyle>
  );
}
