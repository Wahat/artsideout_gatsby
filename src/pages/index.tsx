import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { Layout, Seo } from '../components';
import { Hero } from '../components/home/';
import { schedhule, land, about, mission, aboutEndurance, remarks, studio, performances, speicalProjects, thankYou, team } from '../components/constants/data'
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface LayoutData {
  sponsors: {
    siteMetadata: {
      title: string;
    };
  };
  partners: {
    siteMetadata: {
      title: string;
    };
  };
}

interface PageProps {
  children?: any;
}

const IndexPage = () => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allGraphCmsAboutPage {
        nodes {
          content {
            html
            markdownNode {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Schedule
        </Heading>
        {
          schedhule.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Land Acknowledgement
        </Heading>
        {
          land.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                marginBottom="10px"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          About ARTSIDEOUT
        </Heading>
        {
          about.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                marginBottom="10px"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Mission
        </Heading>
        {
          mission.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                marginBottom="10px"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          About Enudrance
        </Heading>
        {
          aboutEndurance.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Remarks
        </Heading>
        {
          remarks.map((item) => {
            return (
              <div>
                <Heading
                  as="h1"
                  size="lg"
                  marginBottom="10px"
                  fontWeight="bold"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.name}
                </Heading>

                {item.remarks.map((remark) => {
                  return (
                    <Heading
                      as="h1"
                      size="md"
                      fontWeight="medium"
                      marginBottom="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >
                      {remark.text}
                    </Heading>
                  )
                })}
              </div>
            )


          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Studio Artists Overview
        </Heading>
        {
          studio.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Performance Artists Overview
        </Heading>
        {
          performances.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Special Projects Overview
        </Heading>
        {
          speicalProjects.map((item) => {
            return (
              <div>
                <Heading
                  as="h1"
                  size="lg"
                  fontWeight="medium"
                  marginBottom="10px"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.title}
                </Heading>
                <Heading
                  as="h1"
                  size="md"
                  fontWeight="medium"
                  marginBottom="10px"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.text}
                </Heading>
              </div>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Thank You
        </Heading>
        {
          thankYou.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            )
          })}

      </div>

      <div style={{ marginBottom: "25px" }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Our Team
        </Heading>
        {
          team.map((item) => {
            return (
              <div>
                <Heading
                  as="h1"
                  size="lg"
                  marginBottom="10px"
                  fontWeight="bold"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.title}
                </Heading>

                {item.members.map((member) => {
                  return (
                    <Heading
                      as="h1"
                      size="md"
                      fontWeight="medium"
                      marginBottom="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >
                      {member}
                    </Heading>
                  )
                })}
              </div>
            )


          })}

      </div>

    </Layout>
  );
};

export default IndexPage;
