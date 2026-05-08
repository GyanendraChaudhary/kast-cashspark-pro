import { motion } from "framer-motion";
import {
  Navbar,
  HeroSection,
  SpendSection,
  PaymentFlowSection,
  RewardsSection,
  AboutSection,
  BrandExperienceSection,
  ScriptSection,
  Footer,
} from "./components";

export default function App() {
  return (
    <main>
      <div className="bg-layer">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
        <div className="grid-overlay" />
      </div>

      <motion.div
        className="page-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Navbar />
        <HeroSection />
        <SpendSection />
        <PaymentFlowSection />
        <RewardsSection />
        <AboutSection />
        <BrandExperienceSection />
        <ScriptSection />
        <Footer />
      </motion.div>
    </main>
  );
}