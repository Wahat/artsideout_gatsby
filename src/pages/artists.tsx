import React from 'react';
import {
  graphql,
  Link as GatsbyLink,
  useStaticQuery,
  GatsbyGraphQLObjectType
} from 'gatsby';
import { SimpleGrid, Text, Heading, Link } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { CreateFriendlyUrl } from '../helpers';
import { ProfileData } from '../types/PrimaryTypes';

interface ArtistProps {
  artists: {
    nodes: [ProfileData];
  };
}

const ArtistsPage = () => {
  const data: ArtistProps = useStaticQuery(graphql`
    query GetAllArtists {
      artists: allGraphCmsProfile(filter: { profileType: { eq: ARTIST } }) {
        nodes {
          remoteId
          name
          image {
            altText
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Artists" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Artists
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
        In thinking of “Endurance”, artists create a diverse body of works.
        Click on an installation to learn more!
      </Heading>

      <SimpleGrid columns={[2, null, 3]}>
        {data.artists.nodes.map((data: any, i: number) => (
          <Link
            as={GatsbyLink}
            to={`/artist/${CreateFriendlyUrl(data.name, data.remoteId)}`}
            color={"#E81D77"}
          >
            <Text fontWeight={'400'} color={"#E81D77"} fontSize={'lg'} mb={2}>
              {data.name}
            </Text>
          </Link>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default ArtistsPage;
