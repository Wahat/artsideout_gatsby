import React, { ReactNode, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  Box,
  Center,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import {
  FestivalLinks,
  AdditionalLinks,
  SocialLinks
} from '../constants/routes';

import { Link as GatsbyLink } from 'gatsby';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {

  const [urls, setUrls] = useState([{
    "url": "https://docs.google.com/uc?export=open&id=1E7pDYufD0Mfxh_k5Nm7DhtIN_KpTDdVL",
    "title": "Aquaribliz - Endurance Orchestral Club"
  },
  {
    "url": "https://docs.google.com/uc?export=open&id=1sjdRbyb_ZEMQ5CO6gT7DV3kotyc71Ol_",
    "title": "Meera - Endurance Flute Quintet"
  },
  {
    "url": "https://docs.google.com/uc?export=open&id=1zpsTpMFZb81WT7FAIZc7gEiSuW752Kva",
    "title": "Kelcie - Emotions"
  },
  {
    "url": "https://docs.google.com/uc?export=open&id=1mAQjp5gw2kSUjyEvPVJ-ibYmHp8DWGI1",
    "title": "Michael - Endurance Medley"
  },
  {
    "url": "https://docs.google.com/uc?export=open&id=1OtD_SSycLd5OdE5j1M31Md2J1gza3ujx",
    "title": "Ryan Bucao"
  }])

  const [index, setIndex] = useState(Math.ceil(Math.random() * 4))
  console.log(index)
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <Center paddingBottom="20px">
          <Text color="#E81D77" fontWeight={'700'} fontSize={'lg'} mb={2}>
            {urls[index].title}
          </Text>
          <AudioPlayer
            src={urls[index].url}
            showSkipControls={true}
            volume={0.2}
            onClickPrevious={(e) => { e.preventDefault(); setIndex((index - 1) % urls.length); console.log(index) }}
            onClickNext={(e) => { e.preventDefault(); setIndex((index + 1) % urls.length); console.log(index) }}
          ></AudioPlayer>
        </Center>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text color="#E81D77" fontWeight={'700'} fontSize={'lg'} mb={2}>
                ARTSIDEOUT: ENDURANCE
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Computer Science Enrichment Club and
              ARTSIDEOUT. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Festival</ListHeader>
            {FestivalLinks.map(({ name, route }) => (
              <Link as={GatsbyLink} key={name} to={route}>
                {name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Other Goodies</ListHeader>
            {AdditionalLinks.map(({ name, route }) => (
              <Link as={GatsbyLink} key={name} to={route}>
                {name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Interact with Us</ListHeader>
            {SocialLinks.map(({ name, route }) => (
              <Link key={name} href={route} target="_blank" rel="noopener">
                {name}
              </Link>
            ))}
          </Stack>
        </SimpleGrid>

      </Container>
    </Box>
  );
};

export default Footer;
