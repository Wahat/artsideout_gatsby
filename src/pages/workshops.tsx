import React from 'react';
import { Text, Heading, Divider, SimpleGrid, Box, chakra, Button, Flex, Link, useColorModeValue } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Card } from '../components/performances';
import { graphql, useStaticQuery } from 'gatsby';
import { CreateFriendlyUrl } from '../helpers';

const Workshops = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllWorkshops {
      activities: allGraphCmsActivity {
          nodes{
            description {
              html
            }
            endTime
            startTime
            title
            videoUrl
            zoomMeeting {
              meetingId
              meetingPass
              meetingUrl
            }
            profiles {
              name
              remoteId
            }
          }
      }
    }
  `);

  const upcoming = data.activities.nodes.filter((meeting: { startTime: string | number | Date; zoomMeeting: { meetingUrl: string } }) => {
    return meeting.zoomMeeting
  })



  return (
    <Layout>
      <Seo title="Performances" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Upcoming Workshops
      </Heading>
      <SimpleGrid columns={[1, 1, 3]} spacing={2}>
        {upcoming.map((event: { startTime: Date; endTime: Date; title: string; zoomMeeting: { meetingUrl: string }; profiles: { name: string, remoteId: any; }[]; }) => {
          return (
            <Box width="400px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="sm"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {new Date(event.startTime).toLocaleTimeString() + " - " + new Date(event.endTime).toLocaleTimeString()}
                  </chakra.span>
                  <Link
                    display="block"
                    // color={useColorModeValue('gray.800', 'white')}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: 'gray.600', textDecor: 'underline' }}
                  >
                    {event.title}
                  </Link>
                </Box>

                <Box mt={4}>
                  <Flex dir="row" alignItems="center" justify="space-between">
                    <Button>
                      <Link href={event.zoomMeeting.meetingUrl}>
                        Join Meeting
                      </Link>
                    </Button>
                    <Link target="_blank" href={`/artist/${CreateFriendlyUrl(event.profiles[0].name, event.profiles[0].remoteId)}`} fontWeight="bold">
                      {event.profiles[0].name}
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>

    </Layout>
  );
};

export default Workshops;
