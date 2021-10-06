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
  Button
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { CreateFriendlyUrl } from '../helpers';
import { SearchIcon } from '@chakra-ui/icons';
import { node } from 'prop-types';

const InstallationPage = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllInstallations {
      installations: allGraphCmsInstallation {
        nodes {
          remoteId
          title
          images {
            gatsbyImageData(width: 500, height: 500)
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          profiles {
            name
          }
        }
      }
      allGraphCmsProject {
        nodes {
          elements {
            ... on GraphCMS_Installation {
              remoteId
              title
            }
          }
        }
      }
    }
  `);
  console.log(data.installations.nodes);

  const specialIds = data.allGraphCmsProject.nodes.map((node: { elements: { remoteId: any; }[]; }) => node.elements[0].remoteId)

  console.log(specialIds)

  data.installations.nodes = data.installations.nodes.filter((node: { remoteId: any; }) => specialIds.includes(node.remoteId) == false)

  const entryOne = Math.floor(Math.random() * data.installations.nodes.length)
  const entryTwo = Math.floor(Math.random() * data.installations.nodes.length)
  const entryThree = Math.floor(Math.random() * data.installations.nodes.length)
  const entryFour = Math.floor(Math.random() * data.installations.nodes.length)

  const preview = [data.installations.nodes[entryOne], data.installations.nodes[entryTwo],
  data.installations.nodes[entryThree], data.installations.nodes[entryFour]]

  const [isPreview, setIsPreview] = useState(false)

  // data.installations.nodes.splice(entryOne, 1)
  // data.installations.nodes.splice(entryTwo, 1)
  // data.installations.nodes.splice(entryThree, 1)
  // data.installations.nodes.splice(entryFour, 1)


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
        Studio
      </Heading>

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
        {isPreview ? preview.map((data: any, i: number) => (
          <Center>
            <Link
              as={GatsbyLink}
              to={`/installation/${CreateFriendlyUrl(
                data.title,
                data.remoteId
              )}`}
            >
              <GatsbyImage
                objectFit="cover"
                image={
                  data.images[0] && data.images[0].localFile.childImageSharp
                    ? data.images[0].localFile.childImageSharp.gatsbyImageData
                    : ''
                }
                alt={data.images[0] ? data.images[0].altText : data.title}
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
        ))
          :
          data.installations.nodes.map((data: any, i: number) => (
            <Center>
              <Link
                as={GatsbyLink}
                to={`/installation/${CreateFriendlyUrl(
                  data.title,
                  data.remoteId
                )}`}
              >
                <GatsbyImage
                  objectFit="cover"
                  image={
                    data.images[0] && data.images[0].localFile.childImageSharp
                      ? data.images[0].localFile.childImageSharp.gatsbyImageData
                      : ''
                  }
                  alt={data.images[0] ? data.images[0].altText : data.title}
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
          ))}

      </SimpleGrid>
    </Layout>
  );
};

export default InstallationPage;
