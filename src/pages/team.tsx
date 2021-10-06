import React from 'react';
import { Text, Heading } from '@chakra-ui/react';

import { Layout, Seo } from '../components';

const TeamPage = () => {
  return (
    <Layout>
      <Seo title="Team" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Working on it
      </Heading>
    </Layout>
  );
};

export default TeamPage;
