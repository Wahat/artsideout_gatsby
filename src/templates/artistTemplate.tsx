import * as React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SimpleGrid, Text, Heading, Link, Flex } from '@chakra-ui/react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import { ProfileData } from '../types/PrimaryTypes';

interface PropType {
  data: {
    artist: ProfileData;
  };
}

const ArtistTemplate = ({ data }: PropType) => {
  if (data.artist === null) {
    navigate('/404');
    return null;
  }

  console.log(data)

  return (
    <Layout>
      <Seo title={data.artist.name} />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        marginBottom="25px"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.artist.name}
      </Heading>



      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        marginBottom="25px"
        textAlign={['center', 'center', 'left', 'left']}
      >
        <MDXRenderer>
          {data.artist.description.markdownNode.childMdx.body}
        </MDXRenderer>
      </Heading>

      <Flex flexWrap="wrap">
        <Heading
          as={Text}
          size="md"
          fontWeight="bold"
          color="#E81D77"
          marginBottom="15px"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Links:
        </Heading>

        {data.artist.socialLink.map((link: any) => {
          console.log(link)
          return (
            <Link target="_blank" marginLeft="15px" href={link.url}>{link.label}</Link>
          )
        })}
      </Flex>

      {/* {data.artist.installations ? (
        <div>
          <Heading
            as={Text}
            size="lg"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
          >
            Installations
          </Heading>

          <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
            {data.artist.installations.map((data: any, i: number) =>
              data.images.map((image: any, i: number) => (
                <GatsbyImage
                  key={i}
                  objectFit="cover"
                  image={image ? image.gatsbyImageData : ''}
                  alt={image ? image.altText : ''}
                />
              ))
            )}
          </SimpleGrid>
        </div>
      ) : null} */}

      {/* <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.artist.performances.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="cover"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </SimpleGrid> */}

      {/* <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.artist.project.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="cover"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </SimpleGrid> */}
    </Layout>
  );
};

export const data: any = graphql`
query GetProfile($id: ID) {
  artist: graphCmsProfile(remoteId: {eq: $id}) {
    remoteId
    name
    description {
      markdownNode {
        childMdx {
          body
        }
      }
    }
    profileType
    installations {
      remoteId
      title
      images {
        gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
        altText
      }
    }
    performances {
      remoteId
      images {
        gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
        altText
      }
    }
    socialLink {
      ... on GraphCMS_Link {
        id
        url
        label
      }
    }
  }
}
`;

ArtistTemplate.propTypes = {
  data: PropTypes.node.isRequired
};

export default ArtistTemplate;
