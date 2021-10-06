import {
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue,
  Image,
  Button
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

export default function Card(
  startTime: string,
  endTime: string,
  title: string,
  zoomLink: string,
  artist: string,
  artistLink: string,
) {
  return (
    <Box width="400px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            {startTime + "-" + endTime}
          </chakra.span>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
          >
            {title}
          </Link>
        </Box>

        <Box mt={4}>
          <Flex dir="row" alignItems="center" justify="space-between">
            <Button>
              <Link href={zoomLink}>
                Join Meeting
              </Link>
            </Button>
            <Link href={artistLink} fontWeight="bold">
              {artist}
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
