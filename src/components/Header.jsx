import { Box, Flex, Heading, Link } from '@chakra-ui/react';

const Header = () => (
  <Box bg="teal.500" color="white" px={4} py={2}>
    <Flex justify="space-between" align="center">
      <Heading as="h1" size="lg">My Blog</Heading>
      <Flex>
        <Link href="/" px={2}>Home</Link>
        <Link href="/about" px={2}>About</Link>
        <Link href="/contact" px={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Header;