import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Results from './components/Results';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactFormModal from './components/ContactFormModal';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-primary">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <Results />
      <CaseStudies />
      <CTA />
      <Footer />

      <Modal>
        <ContactFormModal />
      </Modal>
    </main>
  );
}
