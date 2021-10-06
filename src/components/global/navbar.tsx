import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  HStack,
  useDisclosure,
  IconButton,
  Container,
  Fade,
  Heading
} from '@chakra-ui/react';
import { Link as GatsbyLink, Link } from 'gatsby';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLinks } from '../constants/routes';
import { StaticImage } from 'gatsby-plugin-image';

const NavbarButton = (name: string, route: string, key: number) => (
  <GatsbyLink to={route}>
    <Button
      key={key}
      variant="ghost"
      rounded={'full'}
      size="sm"
      color={useColorModeValue('gray.700', 'gray.200')}
      _hover={{
        color: 'white',
        bg: '#E81D77'
      }}
    >
      {name}
    </Button>
  </GatsbyLink>
);

const ChangeColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button rounded={'full'} size="sm" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container maxW={'7xl'} py={0}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          p={6}
        >
          <Flex>
            <Link to="/">
              <StaticImage
                src="../../images/aso_logo.svg"
                alt="home page button"
                height={50}
              />
            </Link>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
          >
            <Flex
              align={['center', 'center', 'center', 'center']}
              justify={['center', 'space-between', 'flex-end', 'flex-end']}
              direction={['column', 'row', 'row', 'row']}
              pt={[4, 4, 0, 0]}
            >
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {NavLinks.map(({ name, route }, i) =>
                  NavbarButton(name, route, i)
                )}
                <ChangeColorModeButton />
              </HStack>
            </Flex>
            {/* Mobile */}
            {isOpen ? (
              <Fade in={isOpen}>
                <Box pb={4}>
                  <Stack as={'nav'} spacing={4}>
                    {NavLinks.map(({ name, route }, i) =>
                      NavbarButton(name, route, i)
                    )}
                  </Stack>
                </Box>
              </Fade>
            ) : null}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
