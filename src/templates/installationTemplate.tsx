import * as React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  SimpleGrid,
  Text,
  Heading,
  HStack,
  Stack,
  Divider,
  Box,
  Grid,
  GridItem,
  Link
} from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import { InstallationData } from '../types/PrimaryTypes';
import ReactDisqusComments from 'react-disqus-comments';
import { CreateFriendlyUrl } from '../helpers';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/'
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/'
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/'
//   }
// ];

interface PropType {
  data: {
    installation: InstallationData;
  };
}

const InstallationTemplate = ({ data }: PropType) => {
  if (data.installation === null) {
    navigate('/404');
    return null;
  }
  const images = data.installation.images
    .filter((image: any) => image.gatsbyImageData)
    .map((image: any) => {
      return {
        original: 'image_path',
        srcSet: image.gatsbyImageData.images.sources[0].srcSet,
        originalAlt: image.altText ? image.altText : 'An Installation'
      };
    });
  return (
    <Layout>
      <Seo title={data.installation.title} />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.installation.title}
      </Heading>

      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        By <Link target="_blank" href={`/artist/${CreateFriendlyUrl(data.installation.profiles[0].name, data.installation.profiles[0].remoteId)}`}>{data.installation.profiles[0].name}</Link>
      </Heading>


      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2}>
          {images.length !== 0 ? (
            <ImageGallery items={images} showIndex={true} lazyLoad={true} />
          ) : null}
        </GridItem>

        <GridItem colSpan={2}>
          <Box>
            <Stack direction="column" p={4}>
              <Divider orientation="vertical" />
              <MDXRenderer>
                {data.installation.description.markdownNode.childMdx.body}
              </MDXRenderer>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const data: any = graphql`
query GetInstallation($id: ID) {
  installation: graphCmsInstallation(remoteId: {eq: $id}) {
    remoteId
    title
    images {
      gatsbyImageData(width: 300, placeholder: BLURRED, quality: 70)
      altText
      url
    }
    description {
      markdownNode {
        childMdx {
          body
        }
      }
    }
    profiles {
      name
      remoteId
    }
  }
}
`;

InstallationTemplate.propTypes = {
  data: PropTypes.node.isRequired
};

export default InstallationTemplate;
