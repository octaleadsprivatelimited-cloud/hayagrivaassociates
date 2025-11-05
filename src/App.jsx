import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';
import ScrollRestoration from './components/ScrollRestoration.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));

// Service detail pages (7 new)
const DGPSLandSurvey = lazy(() => import('./pages/services/DGPSLandSurvey.jsx'));
const DigitalLandSurvey = lazy(() => import('./pages/services/DigitalLandSurvey.jsx'));
const DTCPLayouts = lazy(() => import('./pages/services/DTCPLayouts.jsx'));
const EnjoymentSurvey = lazy(() => import('./pages/services/EnjoymentSurvey.jsx'));
const SubDivision = lazy(() => import('./pages/services/SubDivision.jsx'));
const SurveyNumberDemarcation = lazy(() => import('./pages/services/SurveyNumberDemarcation.jsx'));
const RegistrationPlansLocationSketch = lazy(() => import('./pages/services/RegistrationPlansLocationSketch.jsx'));
const MunicipalGrampanchayat = lazy(() => import('./pages/services/MunicipalGrampanchayat.jsx'));
const TSiPASS = lazy(() => import('./pages/services/TSiPASS.jsx'));
const VastuPlans = lazy(() => import('./pages/services/VastuPlans.jsx'));
const BuildingElevation = lazy(() => import('./pages/services/BuildingElevation.jsx'));
const EstimationCosting = lazy(() => import('./pages/services/EstimationCosting.jsx'));
const PropertyValuations = lazy(() => import('./pages/services/PropertyValuations.jsx'));
const HomeLoans = lazy(() => import('./pages/services/HomeLoans.jsx'));

// Additional landing pages (5)
const LandingLandSurveying = lazy(() => import('./pages/landing/LandSurveyingLanding.jsx'));
const LandingBoundarySurveying = lazy(() => import('./pages/landing/BoundarySurveyingLanding.jsx'));
const LandingPlotDemarcation = lazy(() => import('./pages/landing/PlotDemarcationLanding.jsx'));
const LandingLandTitleSurveys = lazy(() => import('./pages/landing/LandTitleSurveysLanding.jsx'));
const LandingTopographicSurveys = lazy(() => import('./pages/landing/TopographicSurveysLanding.jsx'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Hayagriva Associates | Professional Land Surveying</title>
        <meta name="description" content="Land surveying, boundary surveys, plot demarcation, and topographic services by expert surveyors." />
      </Helmet>
      <Header />
      <ScrollRestoration />
      <main className="flex-1">
        <Suspense fallback={<div className="container-default py-12">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />

            <Route path="/services/dgps-land-survey" element={<DGPSLandSurvey />} />
            <Route path="/services/digital-land-survey" element={<DigitalLandSurvey />} />
            <Route path="/services/dtcp-layouts" element={<DTCPLayouts />} />
            <Route path="/services/enjoyment-survey" element={<EnjoymentSurvey />} />
            <Route path="/services/sub-division" element={<SubDivision />} />
            <Route path="/services/survey-number-demarcation" element={<SurveyNumberDemarcation />} />
            <Route path="/services/registration-plans-location-sketch" element={<RegistrationPlansLocationSketch />} />
            <Route path="/services/municipal-grampanchayat" element={<MunicipalGrampanchayat />} />
            <Route path="/services/ts-ipass" element={<TSiPASS />} />
            <Route path="/services/vastu-plans" element={<VastuPlans />} />
            <Route path="/services/building-elevation" element={<BuildingElevation />} />
            <Route path="/services/estimation-costing" element={<EstimationCosting />} />
            <Route path="/services/property-valuations" element={<PropertyValuations />} />
            <Route path="/services/home-loans" element={<HomeLoans />} />

            <Route path="/land-surveying" element={<LandingLandSurveying />} />
            <Route path="/boundary-surveying" element={<LandingBoundarySurveying />} />
            <Route path="/plot-demarcation" element={<LandingPlotDemarcation />} />
            <Route path="/land-title-surveys" element={<LandingLandTitleSurveys />} />
            <Route path="/topographic-surveys" element={<LandingTopographicSurveys />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

