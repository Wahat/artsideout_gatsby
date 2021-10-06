// import React, { useState, useCallback } from 'react';

// export default function GeolocationPage() {
//   return (
//     <div>
//       <h1>Geolocation</h1>
//       <p>Your location is:</p>
//       <p>Latitude:</p>
//       <p>Longitude:</p>

//       <button>Get Current Location</button>
//     </div>
//   );
// }
import React from 'react';
import { Text, Heading, Flex, Avatar, Box } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { graphql, useStaticQuery } from 'gatsby';

const SponsorsPage = () => {
  const data: any = useStaticQuery(graphql`
  query MyQuery {
    allGraphCmsSponsor {
      nodes {
        name
        isPartner
        logo {
          url
        }
      }
    }
  }
  `);

  const sponsored = data.allGraphCmsSponsor.nodes.filter((node: { isPartner: Boolean; }) => !node.isPartner)
  const partners = data.allGraphCmsSponsor.nodes.filter((node: { isPartner: Boolean; }) => node.isPartner)

  return (
    <Layout>
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Sponsors
      </Heading>
      <div style={{ flexWrap: "wrap", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
        {sponsored.map((sponsor: { logo: { url: string }; name: string; }) => {
          return (
            <Box padding="10px" width="200px" height="250px" margin="20px" rounded="lg" shadow="md" maxW="2xl">
              <div style={{ flexWrap: "wrap", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img src={sponsor.logo.url} />
                <Heading
                  as={Text}
                  size="sm"
                  color="#E81D77"
                  textAlign={['center', 'center', 'left', 'left']}
                >{sponsor.name}</Heading>
              </div>
            </Box>
          )
        })}
      </div>
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Partners
      </Heading>
      <div style={{ flexWrap: "wrap", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
        {partners.map((sponsor: { logo: { url: string }; name: string; }) => {
          return (
            <Box padding="10px" width="200px" margin="20px" rounded="lg" shadow="md" maxW="2xl">
              <Flex flexWrap="wrap" justifyContent="start" alignItems="center" direction="column">
                <img src={sponsor.logo.url} />
                <Heading
                  as={Text}
                  marginTop="10px"
                  size="sm"
                  color="#E81D77"
                  textAlign={['center', 'center', 'left', 'left']}
                >{sponsor.name}</Heading>
              </Flex>
            </Box>
          )
        })}
      </div>
    </Layout>
  );
};

export default SponsorsPage;

