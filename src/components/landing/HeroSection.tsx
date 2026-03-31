import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-students.jpg";

const HeroSection = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Sparkles size={14} /> Career Guidance for Students
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            Confused About Your Career?{" "}
            <span className="text-primary">Let's Fix That.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg font-body">
            Stop guessing. Start building a career you'll actually love. Get personalised guidance from someone who truly understands your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Book Free Clarity Call <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">✅ 100% free · No strings attached · Just honest advice</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={heroImg} alt="Happy students celebrating their career success" width={1280} height={720} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-card p-4 border border-border">
            <p className="text-sm font-semibold text-foreground">200+ Students Guided</p>
            <p className="text-xs text-muted-foreground">& counting 🎯</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
