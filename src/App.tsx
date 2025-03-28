import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AvailablePuppies } from './components/AvailablePuppies';
import { BreedingProgram } from './components/BreedingProgram';
import { ParentDogs } from './components/ParentDogs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <AvailablePuppies />
        <BreedingProgram />
        <ParentDogs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;