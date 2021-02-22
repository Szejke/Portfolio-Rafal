import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import { useSiteQuery } from '../queries/useSiteQuery';
import tlo  from '../assets/images/tlo.svg';
import my  from '../assets/images/my.svg';
import Hide from '../components/Hide';


const LandingPage = () => {
  const { name, roles, description ,socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');

  return (
    <Section.Container id="home" Background={Background}>
      <Subtitles>
      <Heading
        as="h1"
        color="gray"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        {`${name}!`}
      </Heading>
      <Heading
        as="h2"
        color="gray"
        fontSize={[5, 6]}
        mb={[3, 5]}
      >
        {`${description}`}
      </Heading>
      <Heading
        as="h2"
        color="gray"
        fontSize={[4, 5]}
        mb={[3, 5]}
      >
        <TextLoop interval={5000}>
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop>
      </Heading>
      <Flex alignItems="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex>
      </Subtitles>
      <MouseIcon onClick={aboutSection.onClick} />
      <Hide query="olg" >
      <MyImage src={my} alt="asasd"/>
      </Hide>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <BackgroundImgae>
      <CoverImage src={tlo} alt="asasd"/>
    </BackgroundImgae>
  </>
);

const Subtitles = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyImage = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 0rem;
  right: 12vw;
  height: 90vh;
  filter: drop-shadow(22px 3px 40px rgba(0, 0, 0, 0.60));
`;

const CoverImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 85%;
`;

const BackgroundImgae = styled.div`
  position: absolute;
  background: #2F80ED;
  clip-path: polygon(0 0, 78% 0, 65% 100%, 0% 100%);
  z-index: -10;
`;

export default LandingPage;
