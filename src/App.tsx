import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar'
import Genres from './components/Genres'
import { GameQueryProvider } from './context/GameQueryContext'
import MainSection from './components/MainSection'
import ScrollTop from './components/ScrollTop'


function App() {

  return (
    <GameQueryProvider>
      <>
        <Grid
          templateAreas={{
            base: '"nav" "main"',
            md: '"nav nav" "aside main"'
          }}
          gridTemplateRows={'70px 1fr'}
          gridTemplateColumns={{
            base: '1fr',
            md: '20% 80%'
          }}
        >
          <GridItem px='4' my='4' area={'nav'}>
            <Navbar />
          </GridItem>
          <GridItem
            px='2'
            mt='5'
            area={'aside'}
            display={{ base: 'none', md: 'block' }}
          >
            <Genres />
          </GridItem>
          <GridItem px='4' mt='5' area={'main'}>
            <MainSection />
          </GridItem>
        </Grid>

        <ScrollTop />
      </>
    </GameQueryProvider>
  )
}

export default App
