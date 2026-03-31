import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const points = [
  "Discover your true strengths and interests",
  "Get a clear, actionable career roadmap",
  "Build confidence to make bold decisions",
  "Learn soft skills that set you apart",
  "Have someone in your corner who genuinely cares",
];

const SolutionSection = () => (
  <section className="py-20" style={{ background: "var(--gradient-section)" }}>
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">What If You Had a Clear Plan?</h2>
          <p className="text-muted-foreground font-body mb-10">
            Imagine waking up knowing exactly what you're working towards. No more confusion, no more "what ifs." Just clarity, confidence, and a path that feels right.
          </p>
        </motion.div>

        <div className="space-y-4 text-left max-w-md mx-auto mb-10">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
              <span className="text-foreground font-body">{pt}</span>
            </motion.div>
          ))}
        </div>

        <Button variant="hero" size="xl" asChild>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Yes, I Want Clarity <ArrowRight size={18} />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default SolutionSection;
