import React from 'react';
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import PropTypes from 'prop-types';

interface AboutProp {
  description?: any;
}

const About = ({ description }: AboutProp) => {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}
      >
        {description}
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Jenny Wilson</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
    </Stack>
  );
};

About.propTypes = {
  data: PropTypes.node.isRequired
};

export default About;
