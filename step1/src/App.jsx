import { DATA } from './data'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Container listItems={ DATA } />
      <Footer />
    </div>
  )
}

export default App;
