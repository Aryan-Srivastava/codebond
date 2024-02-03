import HeaderBar from './components/HeaderBar'
import Header from './components/Header';
import ClientArea from './components/ClientArea';
import HowWeDoArea from './components/HowWeDoArea';
import ServiceArea from './components/ServiceArea';
import CaseStudioArea from './components/CaseStudioArea';
import AboutArea from './components/AboutArea';
import TestimonialArea from './components/TestimonialArea';
import ProjectArea from './components/ProjectArea';
import NewsArea from './components/NewsArea';
import FeatureArea from './components/FeatureArea';
import ContactArea from './components/ContactArea';
import Footer from './components/Footer';
import "./assets/css/bootstrap.min.css";
import "./assets/css/jsvectormap.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/swiper-bundle.min.css";
import HeroEmpowermentArea from './components/HeroEmpowermentArea';
import CaseStudy from './components/CaseStudy/CaseStudy'


function App() {

  return (
    <main className="main-page homepage">
      <HeaderBar />
      <Header />
      <HeroEmpowermentArea />
      <ClientArea />
      <HowWeDoArea />
      <ServiceArea />
      {/* <CaseStudioArea /> */}
      <CaseStudy />
      <AboutArea />
      <TestimonialArea />
      <ProjectArea />
      <NewsArea />
      <FeatureArea />
      <ContactArea />
      <Footer />
    </main>
  )
  }


export default App;
