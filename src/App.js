import './App.css';
import Banner from './Sections/Banner';
import '@qpokychuk/sf-pro-display/index.css';
import '@qpokychuk/sf-pro-display/normal.css';
import '@qpokychuk/sf-pro-display/italic.css';
import Header from './Components/Header';
import CTA from './Sections/CTA';
import Immersive from './Sections/Immersive';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { MainContext, MainProvider } from './Context/MainContext';
import Solutions from './Sections/Solutions';
import Innovations from './Sections/Innovations';
import Companies from './Sections/Companies';
import Info from './Sections/Info';
import Case from './Sections/CaseStudies';
import Contact from './Sections/Contact';
import { useContext } from 'react';
import Menu from './Components/Menu';

const AppDiv = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
`

function App() {

  return (
    <MainProvider>
      <AppDiv>
        <ThemeProvider theme={theme}>
          <Menu />
          <Header/>
          <Banner/>
          <CTA/>
          <Immersive/>
          <Solutions />
          <Innovations />
          <Companies />
          <Info />
          <Case />
          <Contact />
        </ThemeProvider>
      </AppDiv>
    </MainProvider>
  );
}

export default App;
