import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Quote from './components/Quote'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Quote />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
