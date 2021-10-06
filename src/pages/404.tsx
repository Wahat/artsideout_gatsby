import React from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { Layout, Seo } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <Stack spacing={3}>
      <Heading size="4xl" fontWeight="bold" color="#E81D77" textAlign="center">
        404
      </Heading>
      <Heading size="xl" color="gray.600" textAlign="center">
        Page Not Found
      </Heading>
      <Text fontSize="lg" textAlign="center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Stack>
  </Layout>
);

export default NotFoundPage;
