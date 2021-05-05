import React, { ReactNode } from 'react';
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Hero: ReactNode = () => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      px={8}
      mb={16}
      height={'40vh'}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          size="2xl"
          fontWeight="bold"
          color="pink.400"
          textAlign={['center', 'center', 'left', 'left']}
        >
          ARTSIDEOUT 2021: ENDURANCE
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          “ENDURANCE” is the ability to resist through and recover from
          adversity.
        </Heading>
        <Link to="/installations">
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            View Installations
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: '60%', sm: '50%', md: '40%' }} mb={{ base: 12, md: 0 }}>
        <StaticImage src="../images/gatsby-astronaut.png" alt="" />
      </Box>
    </Flex>
  );
};

export default Hero;