import { extendTheme } from '@chakra-ui/react';

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base' // <-- border radius is same for all variants and sizes
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      color: '#E81D77'
    },
    solid: {
      bg: '#E81D77',
      color: 'white'
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid'
  }
};

const ASOTheme = extendTheme({
  components: {
    Button
  }
});

export default ASOTheme;
