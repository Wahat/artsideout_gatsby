/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Navbar, Footer, ASOTheme } from './global';
import 'react-image-gallery/styles/css/image-gallery.css';

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider theme={ASOTheme}>
      <Navbar />
      <Container maxW={'7xl'} minH="70vh" flex={'1 0 auto'} py={8} mt={5}>
        {children}
      </Container>
      <Footer />
    </ChakraProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
