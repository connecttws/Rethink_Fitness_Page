import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransformationSection from "@/components/TransformationSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      <SectionDivider label="Watch Video" />
      <VideoSection />
      
      <SectionDivider label="Why Choose Us" />
      <AboutSection />
      
      <SectionDivider label="How It Works" />
      <TransformationSection />
      
      <SectionDivider label="Packages" />
      <ProgramsSection />
      
      <SectionDivider label="Our Edge" />
      <WhyChooseUsSection />
      
      <SectionDivider label="Client Stories" />
      <TestimonialsSection />
      
      <SectionDivider label="Get Started" />
      <CTASection />
      
      <Footer />
    </div>
  );
}
