import React, { useState } from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  SimpleGrid,
  Text,
  Heading,
  Center,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Button,
  Box,
  Flex,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { CreateFriendlyUrl } from '../helpers';
import { SearchIcon } from '@chakra-ui/icons';

const SpecialProjects = () => {
  const data: any = useStaticQuery(graphql`
    query GetSpecialProjects {
      allGraphCmsProject {
        nodes {
          title
          remoteId
          elements {
            ... on GraphCMS_Installation {
              id
              remoteId
              profiles{
                name
                remoteId
              }
              images {
                gatsbyImageData(width: 500, height: 500)
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 500)
                  }
                }
              }
            }
            ... on GraphCMS_Activity {
              id
              title
              startTime
              videoUrl
              profiles {
                remoteId
                name
              }
            }
          }
          profiles {
            name
            remoteId
          }
        }
      }
    }
    `);

  console.log(data.allGraphCmsProject.nodes)

  const studio = data.allGraphCmsProject.nodes.filter((node: { elements: { id: string }[]; }) => Object.keys(node.elements[0]).length > 0 && node.elements[0].id.includes("Installation"))
  const performance = data.allGraphCmsProject.nodes.filter((node: { elements: { id: string }[]; }) => node.elements[0].id.includes("Activity"))

  console.log(performance)

  return (
    <Layout>
      <Seo title="Installations" />
      {/* <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Center>
              <SearchIcon color="gray.300" />
            </Center>
          }
        />
        <Input variant="filled" placeholder="Search Installations" size="lg" />
      </InputGroup> */}

      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Featured Collections
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
        Projects currated by the ARTSIDEOUT team.
      </Heading>
      <Divider />
      {/* <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        In thinking of “Endurance”, artists create a diverse body of works.
        Click on an installation to learn more!
      </Heading> */}
      <SimpleGrid columns={[2, null, 4]} spacing={2}>
        {studio.map((data: any, i: number) => {
          console.log(data.elements[0])

          if (Object.keys(data.elements[0]).length === 0) {
            return (
              <div />
            )
          }

          return (
            <Center>
              <Link
                as={GatsbyLink}
                to={`/installation/${CreateFriendlyUrl(
                  data.title,
                  data.elements[0].remoteId
                )}`}
              >
                <GatsbyImage
                  objectFit="cover"
                  image={
                    data.elements[0].images[0] && data.elements[0].images[0].localFile.childImageSharp
                      ? data.elements[0].images[0].localFile.childImageSharp.gatsbyImageData
                      : ''
                  }
                  alt={data.elements[0].images[0] ? data.elements[0].images[0].altText : data.title}
                />
                <Heading
                  as="h3"
                  size="md"
                  color="primary.800"
                  fontWeight="bold"
                  lineHeight={1.5}
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {data.title}
                </Heading>
                {data.profiles.map((data: any, i: number) => (
                  <Text
                    size="md"
                    color="primary.800"
                    textAlign={['center', 'center', 'left', 'left']}
                  >
                    {data.name}
                  </Text>
                ))}
              </Link>
            </Center>
          )
        })}

      </SimpleGrid>


      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Special Projects
      </Heading>

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        marginBottom="30px"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Projects curated and commissioned by the ARTSIDEOUT team.
      </Heading>


      <Flex flexWrap={"wrap"} flexDirection="row" justifyContent="flex-start" alignContent="flex-start">
        {performance.map((event: { elements: { videoUrl: string }[]; startTime: Date; endTime: Date; title: string; zoomMeeting: { meetingUrl: string }; profiles: { name: string, remoteId: any; }[]; }) => {
          console.log(CreateFriendlyUrl(event.profiles[0].name, event.profiles[0].remoteId))
          return (
            <Box width="350px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Box p={2}>
                <Box>
                  <chakra.span
                    fontSize="sm"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {new Date(event.startTime).toDateString()}
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
                      <Link target="_blank" href={event.elements[0].videoUrl}>
                        View Recording
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
      </Flex>
    </Layout>
  );
};

export default SpecialProjects;
