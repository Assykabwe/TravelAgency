import Header from "./components/Header";
import Hero from "./components/Hero";
import PackageGrid from "./components/PackageGrid";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PackageGrid />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
