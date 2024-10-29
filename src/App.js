import './App.css';
import Banner from './Sections/Banner';
import '@qpokychuk/sf-pro-display/index.css';
import '@qpokychuk/sf-pro-display/normal.css';
import '@qpokychuk/sf-pro-display/italic.css';
import Header from './Components/Header';
import CTA from './Sections/CTA';
import Immersive from './Sections/Immersive';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { MainProvider } from './Context/MainContext';

function App() {

  return (
    <MainProvider>
      <ThemeProvider theme={theme}>
        <Header/>
        <Banner/>
        <CTA/>
        <Immersive/>
      </ThemeProvider>
    </MainProvider>
  );
}

export default App;
