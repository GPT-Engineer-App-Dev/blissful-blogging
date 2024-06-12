import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => (
  <ChakraProvider>
    <Header />
    <MainContent />
    <Footer />
  </ChakraProvider>
);

export default App;