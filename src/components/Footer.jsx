import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box bg="teal.500" color="white" px={4} py={2} mt={8}>
    <Text textAlign="center">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
    <Flex justify="center" mt={2}>
      <Link href="/privacy" px={2}>Privacy Policy</Link>
      <Link href="/terms" px={2}>Terms of Service</Link>
    </Flex>
  </Box>
);

export default Footer;